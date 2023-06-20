import { AppInterface } from '../models/app/app.js';
import { FunctionExtension } from '../models/app/extensions.js';
interface GenerateSchemaOptions {
    app: AppInterface;
    extension: FunctionExtension;
    apiKey?: string;
}
export declare function generateSchemaService(options: GenerateSchemaOptions): Promise<string>;
export {};
