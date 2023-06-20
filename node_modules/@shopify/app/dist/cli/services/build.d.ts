import { AppInterface } from '../models/app/app.js';
interface BuildOptions {
    app: AppInterface;
    skipDependenciesInstallation: boolean;
    apiKey?: string;
}
declare function build(options: BuildOptions): Promise<void>;
export default build;
