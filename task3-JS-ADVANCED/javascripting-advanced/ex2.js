const parentFunc = (func, num) => {
  //   for (let i = 0; i < num; i++) func();
  if (num === 0) return;
  func();
  return parentFunc(func, --num);
};
function func() {}
parentFunc(func, 5);

module.exports = parentFunc;
