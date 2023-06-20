import AppGenerateExtension from '../generate/extension.js';
declare class AppScaffoldExtension extends AppGenerateExtension {
    static description: string;
    static hidden: boolean;
    run(): Promise<void>;
}
export default AppScaffoldExtension;
