module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, el) => {
    acc.push(fn(el));
    return acc;
  }, []);
};

// const map = (arr, fn) => {
//   return arr.reduce((acc, el) => {
//     acc.push(fn(el));
//     return acc;
//   }, []);
// };

// const nums = [1, 2, 3, 4, 5];

// const output = map(nums, function double(item) {
//   return item * 2;
// });

// console.log(output); // => [2,4,6,8,10]
