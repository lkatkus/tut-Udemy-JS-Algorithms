const fib = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

const memoFib = (n, memo = []) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  const res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  memo[n] = res;

  return res;
};

const tabulatedFib = (n) => {
  if (n <= 2) {
    return 1;
  }

  const fibNums = [null, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
};

console.log(fib(40));
console.log('====================================');
console.log(memoFib(10));
console.log(memoFib(100));
console.log(memoFib(1000));
console.log(memoFib(2000));
console.log('====================================');
console.log(tabulatedFib(10));
console.log(tabulatedFib(100));
console.log(tabulatedFib(1000));
// Can handle more then recursive version since its not limited by stack size
console.log(tabulatedFib(200000));
