
type Callback<T> = (err: any, result: T) => void;

declare namespace promisify {}

declare function promisify<TReturn>(fn: (cb: Callback<TReturn>) => void): () => Promise<TReturn>;
declare function promisify<TArg, TReturn>(fn: (arg: TArg, cb: Callback<TReturn>) => void): (arg: TArg) => Promise<TReturn>;
declare function promisify<TArg1, TArg2, TReturn>(fn: (arg1: TArg1, arg2: TArg2, cb: Callback<TReturn>) => void): (arg1: TArg1, arg2: TArg2) => Promise<TReturn>;

export = promisify;