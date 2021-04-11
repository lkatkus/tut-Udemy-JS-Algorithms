const { performance } = require('perf_hooks');

const addUpToLoop = (n) => {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};

const addUpToWithMath = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
console.log(addUpToLoop(1000000000));
let t2 = performance.now();
console.log('addUpToLoop', (t2 - t1) / 1000);

t1 = performance.now();
console.log(addUpToWithMath(1000000000));
t2 = performance.now();
console.log('addUpToForm', (t2 - t1) / 1000);
