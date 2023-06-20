interface RunShopifyCLIOptions {
    development: boolean;
}
declare function runShopifyCLI({ development }: RunShopifyCLIOptions): Promise<void>;
export default runShopifyCLI;
