import { Timestamped2 } from "common";

class Foo {}

export type Constructor<A> = new (...args: any[]) => A;

export function Timestamped<TBase extends Constructor<{}>>(Base: TBase) {
  return class TS1Impl extends Base {
    timestamp = Date.now();
  };
}

export class Product extends Timestamped(Foo) {
  static get tableName() {
    return "products";
  }
}

export class Product2 extends Timestamped2(Foo) {
  static get tableName() {
    return "products";
  }
}

let c: Product = new Product();
console.log(c);

let d: Product2 = new Product2();
console.log(d);

export default 1;
