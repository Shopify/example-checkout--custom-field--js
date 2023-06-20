type OverloadProps<TOverload> = Pick<TOverload, keyof TOverload>;
type OverloadUnionRecursive<TOverload, TPartialOverload = unknown> = TOverload extends (...args: infer TArgs) => infer TReturn ? TPartialOverload extends TOverload ? never : OverloadUnionRecursive<TPartialOverload & TOverload, TPartialOverload & ((...args: TArgs) => TReturn) & OverloadProps<TOverload>> | ((...args: TArgs) => TReturn) : never;
type OverloadUnion<TOverload extends (...args: any[]) => any> = Exclude<OverloadUnionRecursive<(() => never) & TOverload>, TOverload extends () => never ? never : () => never>;
export type OverloadParameters<T extends (...args: any[]) => any> = Parameters<OverloadUnion<T>>;
export type OverloadReturnType<T extends (...args: any[]) => any> = ReturnType<OverloadUnion<T>>;
export {};
