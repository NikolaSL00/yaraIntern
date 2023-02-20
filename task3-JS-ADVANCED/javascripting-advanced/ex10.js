// function logger(namespace) {
//   return function () {
//     // let arr = [...arguments];
//     return console.log.bind(console, namespace);
//     // log();
//   };
// }

// var info = logger("INFO:");
// info("this is an info message");
// // INFO: this is an info message

// var warn = logger("WARN:");
// warn("this is a warning message", "with more info");

module.exports = function (namespace) {
  return console.log.bind(console, namespace);
};
