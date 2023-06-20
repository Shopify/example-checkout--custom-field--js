export declare function topicPrompt(availableTopics: string[]): Promise<string>;
export declare function apiVersionPrompt(availableVersions: string[]): Promise<string>;
export declare function deliveryMethodPrompt(): Promise<string>;
export declare function addressPrompt(deliveryMethod: string): Promise<string>;
export declare function clientSecretPrompt(): Promise<string>;
export declare function deliveryMethodInstructions(method: string): string[];
export declare function deliveryMethodInstructionsAsString(method: string): string;
