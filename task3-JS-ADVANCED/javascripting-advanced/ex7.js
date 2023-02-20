// const toUpperArray = (items) => {
//   if (!items.length) return []; // end condition
//   let head = items[0]; // item to operate on
//   head = head.toUpperCase(); // perform action
//   let tail = items.slice(1); // next
//   return [head].concat(toUpperArray(tail)); // recursive step
// };

// toUpperArray(["hello", "world"]); // => ['HELLO', 'WORLD']
const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

const customFunc = (map, word) => {
  map[word] ? map[word]++ : (map[word] = 1);
  return map;
};

const reduce = (arr, fn, initial) => {
  // let i = Object.values(initial).reduce((sum, el) => el + sum, 0);

  // if (i === arr.length) {
  //   return initial;
  // }

  // initial = fn(initial, arr[i]);
  // return reduce(arr, fn, initial);
  return (function reduceOne(index, value) {
    if (index === arr.length) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
};

console.log(reduce(inputWords, customFunc, {}));

module.exports = reduce;
