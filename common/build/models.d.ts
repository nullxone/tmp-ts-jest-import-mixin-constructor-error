import { Constructor } from "./utils";
export declare function Timestamped2<TBase extends Constructor<{}>>(Base: TBase): {
    new (...args: any[]): {
        timestamp: number;
    };
} & TBase;
//# sourceMappingURL=models.d.ts.map