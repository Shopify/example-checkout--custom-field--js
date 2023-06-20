const { NgrokClient, NgrokClientError } = require("./src/client");
const uuid = require("uuid");
const {
  getProcess,
  killProcess,
  setAuthtoken,
  getVersion,
  configCheck,
  configUpgrade,
} = require("./src/process");
const { defaults, validate, sleep } = require("./src/utils");

let processUrl = null;
let ngrokClient = null;

function connect(opts) {
  return new Promise(async(resolve, reject) => {
    opts = defaults(opts);
    opts.onErrorEvent = (error) => {
      reject(error)
      ngrokClient = null;
    };
    validate(opts);
    if (opts.authtoken) {
      await setAuthtoken(opts);
    }
    processUrl = await getProcess(opts).catch(reject);
    ngrokClient = new NgrokClient(processUrl);
    
    const url = await connectRetry(opts);
    resolve(url);
  })
}

async function connectRetry(opts, retryCount = 0) {
  if (!processUrl || !ngrokClient) {
    return;
  }
  opts.name = String(opts.name || uuid.v4());
  const response = await ngrokClient.startTunnel(opts);
  if (response) {
    return response.public_url;
  }
  if (retryCount >= 10) {
    throw new Error('failed to start the tunnel');
  }
  await sleep(0.2);
  return connectRetry(opts, ++retryCount);
}

async function disconnect(publicUrl) {
  if (!ngrokClient) return;
  const tunnels = (await ngrokClient.listTunnels()).tunnels;
  if (!publicUrl) {
    const disconnectAll = tunnels.map((tunnel) =>
      disconnect(tunnel.public_url)
    );
    return Promise.all(disconnectAll);
  }
  const tunnelDetails = tunnels.find(
    (tunnel) => tunnel.public_url === publicUrl
  );
  if (!tunnelDetails) {
    throw new Error(`there is no tunnel with url: ${publicUrl}`);
  }
  return ngrokClient.stopTunnel(tunnelDetails.name);
}

async function kill() {
  if (!ngrokClient) return;
  await killProcess();
  ngrokClient = null;
  tunnels = {};
}

function getUrl() {
  return processUrl;
}

function getApi() {
  return ngrokClient;
}

async function validConfig() {
  return configCheck();
}

async function upgradeConfig() {
  return configUpgrade();
}

module.exports = {
  connect,
  disconnect,
  authtoken: setAuthtoken,
  kill,
  getUrl,
  getApi,
  getVersion,
  NgrokClient,
  NgrokClientError,
  validConfig,
  upgradeConfig,
};
