"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPointIn = exports.centerOf = void 0;
const point_class_1 = require("./point.class");
/**
 * {@link centerOf} returns the center {@link Point} for a given {@link Region}
 * @param target {@link Region} to determine the center {@link Point} for
 */
const centerOf = async (target) => {
    const targetRegion = await target;
    const x = Math.floor(targetRegion.left + targetRegion.width / 2);
    const y = Math.floor(targetRegion.top + targetRegion.height / 2);
    return new point_class_1.Point(x, y);
};
exports.centerOf = centerOf;
/**
 * {@link randomPointIn} returns a random {@link Point} within a given {@link Region}
 * @param target {@link Region} the random {@link Point} has to be within
 */
const randomPointIn = async (target) => {
    const targetRegion = await target;
    const x = Math.floor(targetRegion.left + Math.random() * targetRegion.width);
    const y = Math.floor(targetRegion.top + Math.random() * targetRegion.height);
    return new point_class_1.Point(x, y);
};
exports.randomPointIn = randomPointIn;
//# sourceMappingURL=location.function.js.map