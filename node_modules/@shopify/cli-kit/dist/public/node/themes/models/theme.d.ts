export declare const DEVELOPMENT_THEME_ROLE = "development";
export declare class Theme {
    id: number;
    name: string;
    private _role;
    createdAtRuntime: boolean;
    constructor(id: number, name: string, _role: string, createdAtRuntime?: boolean);
    get role(): string;
    set role(_role: string);
    get hasDevelopmentRole(): boolean;
}
