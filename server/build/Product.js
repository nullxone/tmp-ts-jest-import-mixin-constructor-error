"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("common");
class Foo {
}
function Timestamped(Base) {
    return class TS1Impl extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = Date.now();
        }
    };
}
exports.Timestamped = Timestamped;
class Product extends Timestamped(Foo) {
    static get tableName() {
        return "products";
    }
}
exports.Product = Product;
class Product2 extends common_1.Timestamped2(Foo) {
    static get tableName() {
        return "products";
    }
}
exports.Product2 = Product2;
let c = new Product();
console.log(c);
let d = new Product2();
console.log(d);
exports.default = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBRXRDLE1BQU0sR0FBRztDQUFHO0FBSVosU0FBZ0IsV0FBVyxDQUFnQyxJQUFXO0lBQ3BFLE9BQU8sTUFBTSxPQUFRLFNBQVEsSUFBSTtRQUExQjs7WUFDTCxjQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FBQSxDQUFDO0FBQ0osQ0FBQztBQUpELGtDQUlDO0FBRUQsTUFBYSxPQUFRLFNBQVEsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxNQUFNLEtBQUssU0FBUztRQUNsQixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFKRCwwQkFJQztBQUVELE1BQWEsUUFBUyxTQUFRLHFCQUFZLENBQUMsR0FBRyxDQUFDO0lBQzdDLE1BQU0sS0FBSyxTQUFTO1FBQ2xCLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQUpELDRCQUlDO0FBRUQsSUFBSSxDQUFDLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWYsSUFBSSxDQUFDLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWYsa0JBQWUsQ0FBQyxDQUFDIn0=