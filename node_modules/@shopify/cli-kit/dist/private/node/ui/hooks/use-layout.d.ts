/// <reference types="node" resolution-mode="require"/>
interface Layout {
    twoThirds: number;
    oneThird: number;
    fullWidth: number;
}
export default function useLayout(): Layout;
export declare function calculateLayout(stdout: NodeJS.WriteStream | undefined): {
    fullWidth: number;
    oneThird: number;
    twoThirds: number;
};
export {};
