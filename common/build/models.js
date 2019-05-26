"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Timestamped2(Base) {
    return class TS2Impl extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = Date.now();
        }
    };
}
exports.Timestamped2 = Timestamped2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLFlBQVksQ0FBZ0MsSUFBVztJQUNyRSxPQUFPLE1BQU0sT0FBUSxTQUFRLElBQUk7UUFBMUI7O1lBQ0wsY0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUEsQ0FBQztBQUNKLENBQUM7QUFKRCxvQ0FJQyJ9