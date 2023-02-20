const input = {
  0: "argument0",
  1: "argument1", // etc
  2: "quack",
  length: 2,
};

// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function (obj) {
//     return Object.prototype.hasOwnProperty.call(obj, "quack");
//   }).length;
// }
function duckCount(...args) {
  return [...]
}
// const duckCount = function () {
//   const arrArgs = Array.prototype.slice.call(arguments);
//   return arrArgs.filter(function (row) {
//     return Object.prototype.hasOwnProperty.call(row, "quack").length;
//   });
// };

module.exports = duckCount;
