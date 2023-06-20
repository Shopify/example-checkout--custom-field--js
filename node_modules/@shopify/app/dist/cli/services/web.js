import { exec } from '@shopify/cli-kit/node/system';
export default async function web(command, { web, stdout, stderr, signal, env = {} }) {
    const script = web.configuration.commands[command];
    if (!script) {
        return;
    }
    const [cmd, ...args] = script.split(' ');
    await exec(cmd, args, { cwd: web.directory, stdout, stderr, signal, env });
    stdout.write('Web successfully built.');
}
//# sourceMappingURL=web.js.map