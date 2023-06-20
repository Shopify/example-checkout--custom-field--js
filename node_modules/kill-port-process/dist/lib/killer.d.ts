export declare type Signal = 'SIGTERM' | 'SIGKILL';
declare type KillOptions = {
    signal: Signal;
};
export declare class Killer {
    protected ports: number[];
    constructor(ports: number[]);
    kill(options: KillOptions): Promise<unknown[]>;
    private win32Kill;
    private unixKill;
}
export {};
//# sourceMappingURL=killer.d.ts.map