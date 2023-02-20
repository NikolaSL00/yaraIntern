function Spy(target, method) {
  let spy = { count: 0 };

  let oldFunctionality = target[method];

  target[method] = function (...args) {
    spy.count++;
    return oldFunctionality.apply(this, ...args);
  };

  return spy;
}

let spy = Spy(console, "error");

console.error("calling console.error");
console.error("calling console.error");
console.error("calling console.error");

console.log(spy.count);

module.exports = Spy;
