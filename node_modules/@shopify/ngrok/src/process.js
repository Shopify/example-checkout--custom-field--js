const { promisify } = require("util");
const { spawn, exec: execCallback } = require("child_process");
const exec = promisify(execCallback);
const platform = require("os").platform();
const { join } = require("path");
const { sleep } = require("./utils");

const defaultDir = join(__dirname, "..", "bin");
const bin = platform === "win32" ? "ngrok.exe" : "ngrok";
const ready = /starting web service.*addr=(\d+\.\d+\.\d+\.\d+:\d+)/;
const inUse = /address already in use/;
const errorMessageRegEx = /ERROR.*/;
const errorCodeRegEx = /ERR_NGROK_\d*/;

let processPromise, activeProcess;

/*
  ngrok process runs internal ngrok api
  and should be spawned only ONCE
  (respawn allowed if it fails or .kill method called)
*/
async function getProcess(opts) {
  if (processPromise) return processPromise;
  try {
    processPromise = startProcess(opts);
    return await processPromise;
  } catch (ex) {
    processPromise = null;
    throw ex;
  }
}

function parseAddr(message) {
  if (message[0] === "{") {
    const parsed = JSON.parse(message);
    return parsed.addr
  } else {
    const parsed = message.match(ready);
    if (parsed) {
      return parsed[1];
    }
  }
}

async function startProcess(opts) {
  let dir = defaultDir;
  const start = ["start", "--none", "--log=stdout"];
  if (opts.region) start.push("--region=" + opts.region);
  if (opts.configPath) start.push("--config=" + opts.configPath);
  if (opts.binPath) dir = opts.binPath(dir);

  const ngrok = spawn(join(dir, bin), start, { windowsHide: true });

  let resolve, reject;
  const apiUrl = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  ngrok.stdout.on("data", (data) => {
    const msg = data.toString().trim();
    if (opts.onLogEvent) {
      opts.onLogEvent(msg);
    }
    if (opts.onStatusChange) {
      if (msg.match("client session established")) {
        opts.onStatusChange("connected");
      } else if (msg.match("session closed, starting reconnect loop")) {
        opts.onStatusChange("closed");
      }
    }

    const msgs = msg.split(/\n/);
    msgs.forEach(msg => {
      const addr = parseAddr(msg);
      if (addr) {
        resolve(`http://${addr}`);
      } else if (msg.match(inUse)) {
        reject(new Error(msg.substring(0, 10000)));
      }
    })
  });

  let errors = [];

  ngrok.stderr.on("data", (data) => {
    const msg = data.toString().substring(0, 10000);
    const lines = msg.split(/\n/);
    lines.forEach(line => {
      let errorMessage = line.match(errorMessageRegEx);
      if (errorMessage) {
        errors.push(cleanError(errorMessage[0]));
        if (line.match(errorCodeRegEx)) {
          reject(new Error(errors.join('\n')));
          if (opts.onErrorEvent) {
            opts.onErrorEvent(new Error(errors.join('\n')));
          }
        }
      }
    })
  });

  ngrok.on("exit", () => {
    processPromise = null;
    activeProcess = null;
    if (opts.onTerminated) {
      opts.onTerminated();
    }
  });

  sleep(2).then(() => {
    const message = (errors.length) ? errors.join('\n') : 'failed to start the ngrok process';
    reject(new Error(message));
  });

  try {
    const url = await apiUrl;
    activeProcess = ngrok;
    return url;
  } catch (ex) {
    ngrok.kill();
    throw ex;
  } finally {
    // Remove the listeners if nobody is interested in the content.
    if (!opts.onLogEvent && !opts.onStatusChange) {
      ngrok.stdout.removeAllListeners("data");
    }
    if (!opts.onErrorEvent) {
      ngrok.stderr.removeAllListeners("data");
    }
  }
}

function cleanError(message) {
  const newMessage = message.replace(/ERROR:\s+/, '');
  return newMessage.replace(errorCodeRegEx, `More info: https://ngrok.com/docs/errors/${newMessage.toLowerCase()}`);
}

function killProcess() {
  if (!activeProcess) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    activeProcess.on("exit", () => resolve());
    activeProcess.kill();
  });
}

process.on("exit", () => {
  if (activeProcess) {
    activeProcess.kill();
  }
});

/**
 * @param {string | Ngrok.Options} optsOrToken
 */
async function setAuthtoken(optsOrToken) {
  const isOpts = typeof optsOrToken !== "string";
  const opts = isOpts ? optsOrToken : {};
  const token = isOpts ? opts.authtoken : optsOrToken;

  const authtoken = ["authtoken", token];
  if (opts.configPath) authtoken.push("--config=" + opts.configPath);

  let dir = defaultDir;
  if (opts.binPath) dir = opts.binPath(dir);
  const ngrok = spawn(join(dir, bin), authtoken, { windowsHide: true });

  const killed = new Promise((resolve, reject) => {
    ngrok.stdout.once("data", () => resolve());
    ngrok.stderr.once("data", () => reject(new Error("cant set authtoken")));
  });

  try {
    return await killed;
  } finally {
    ngrok.kill();
  }
}

 async function configCheck() {
  let dir = defaultDir;
  const command = ["config", "check"];
  const ngrok = spawn(join(dir, bin), command, { windowsHide: true });

  const killed = new Promise((resolve, reject) => {
    ngrok.stdout.once("data", (data) => {
      const msg = data.toString().trim();
      if (msg.match(/Valid configuration file/)) {
        resolve();
      } else {
        reject();
      }
    });
    ngrok.stderr.once("data", () => { reject(); });
  });

  try {
    return await killed.then(() => true).catch(() => false);
  } finally {
    ngrok.kill();
  }
}

 async function configUpgrade() {
  let dir = defaultDir;
  const command = ["config", "upgrade"];
  const ngrok = spawn(join(dir, bin), command, { windowsHide: true });

  const killed = new Promise((resolve, reject) => {
    ngrok.stdout.once("data", () => resolve());
    ngrok.stderr.once("data", () => reject(new Error("cant upgrade config")));
  });

  try {
    return await killed;
  } finally {
    ngrok.kill();
  }
}

/**
 * @param {Ngrok.Options | undefined} opts
 */
async function getVersion(opts = {}) {
  let dir = defaultDir;
  if (opts.binPath) dir = opts.binPath(dir);
  const { stdout } = await exec(`${join(dir, bin)} --version`);
  return stdout.replace("ngrok version", "").trim();
}

module.exports = {
  getProcess,
  killProcess,
  setAuthtoken,
  getVersion,
  configCheck,
  configUpgrade,
};
