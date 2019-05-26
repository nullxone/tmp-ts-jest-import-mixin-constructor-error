import { Constructor } from "./utils";

export function Timestamped2<TBase extends Constructor<{}>>(Base: TBase) {
  return class TS2Impl extends Base {
    timestamp = Date.now();
  };
}
