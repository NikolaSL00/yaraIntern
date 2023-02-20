const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

// const countWords = (inputWords) => {
//   return inputWords.reduce(
//     (acc, el) => ({
//       ...acc,
//       [el]: (acc[el] || 0) + 1,
//     }),
//     {}
//   );
// };

// function countWords(arr) {
//   return arr.reduce((countMap, word) => {
//     countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
//     return countMap;
//   }, {}); // second argument to reduce initialises countMap to {}
// }

// function countWords(arr) {
//   return arr.reduce((map, word) => {
//     map[word] = ++map[word] || 1;
//     return map;
//   }, {});
// }

function countWords(arr) {
  return arr.reduce((map, word) => {
    map[word] ? map[word]++ : (map[word] = 1);
    return map;
  }, {});
}

console.log(countWords(inputWords));

module.exports = countWords;
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
