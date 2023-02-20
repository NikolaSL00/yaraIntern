function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length;
  function curryMe(f) {
    if (n <= 1) return fn(f);
    return curryN(fn.bind(fn, f), n - 1);
  }
  return curryMe;
}

module.exports = curryN;
