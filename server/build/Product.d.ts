declare class Foo {
}
export declare type Constructor<A> = new (...args: any[]) => A;
export declare function Timestamped<TBase extends Constructor<{}>>(Base: TBase): {
    new (...args: any[]): {
        timestamp: number;
    };
} & TBase;
declare const Product_base: {
    new (...args: any[]): {
        timestamp: number;
    };
} & typeof Foo;
export declare class Product extends Product_base {
    static readonly tableName: string;
}
declare const Product2_base: (new (...args: any[]) => {
    timestamp: number;
}) & typeof Foo;
export declare class Product2 extends Product2_base {
    static readonly tableName: string;
}
declare const _default: 1;
export default _default;
//# sourceMappingURL=Product.d.ts.map