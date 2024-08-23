declare global {
  interface ObjectConstructor {
    isObject<T = unknown>(subject: T): boolean,
    copy(src: object, dst: object, what?: Readonly<Array<string>|null>): void,
    isLike<T = unknown>(subject: object, query: object|T): boolean,
    count(subject: object): number,
    values<T = unknown>(o: object): Array<T>,
    assign(to: object, ...args: Array<object>): object,
    deepAssign(to: object, ...args: Array<object>): object,
    clone(o: object): object;
  }
}

export { };
