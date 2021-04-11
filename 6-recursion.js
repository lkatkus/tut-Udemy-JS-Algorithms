const countDown = (num) => {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);

  countDown(num - 1);
};

countDown(4);

const sumRange = (num) => {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
};

console.log('sumRange(3)', sumRange(3));
console.log('sumRange(12)', sumRange(12));

const factorial = (num) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

console.log('factorial(3)', factorial(3));
console.log('factorial(6)', factorial(6));

const recFactorial = (num) => {
  if (num <= 1) {
    return num;
  }

  return num * recFactorial(num - 1);
};

console.log('recFactorial(3)', recFactorial(3));
console.log('recFactorial(6)', recFactorial(6));

const collectOdds = (...numbers) => {
  let results = [];

  const checkOdd = (arr) => {
    if (arr.length === 0) {
      return;
    }

    if (arr[0] % 2 !== 0) {
      results.push(arr[0]);
    }

    checkOdd(arr.slice(1));
  };

  checkOdd(numbers);

  return results;
};

console.log('collectOdds', collectOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 11));
console.log('collectOdds', collectOdds());

const collectOddsRec = (numbers = []) => {
  if (numbers.length === 0) {
    return [];
  }

  if (numbers[0] % 2 !== 0) {
    return [numbers[0], ...collectOddsRec(numbers.slice(1))];
  }

  return collectOddsRec(numbers.slice(1));
};

console.log('collectOddsRec', collectOddsRec([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
console.log('collectOddsRec', collectOddsRec());

const power = (base, expo) => {
  if (expo === 1) {
    return base;
  } else if (expo === 0) {
    return 1;
  }

  return base * power(base, expo - 1);
};

console.log('power(2, 0)', power(2, 0));
console.log('power(2, 2)', power(2, 2));
console.log('power(4, 2)', power(4, 2));
console.log('power(3, 2)', power(3, 2));
console.log('power(11, 2)', power(11, 2));

const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
};

console.log('productOfArray([1,2,3])', productOfArray([1, 2, 3]));
console.log('productOfArray([1,2,3,10])', productOfArray([1, 2, 3, 10]));

// 1, 1, 2, 3, 5, 8,

const fib = (step) => {
  if (step <= 2) {
    return 1;
  }

  return fib(step - 1) + fib(step - 2);
};

console.log('fib(4)', fib(4)); // 3
console.log('fib(10)', fib(10)); // 55
console.log('fib(28)', fib(28)); // 317811
console.log('fib(35)', fib(35)); // 9227465

const reverse = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

const isPalindrome = (s) => {
  if (s.length <= 1) {
    return true;
  }

  if (s[0] !== s[s.length - 1]) {
    return false;
  }

  return isPalindrome(s.slice(1, s.length - 1));
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, cb) => {
  if (arr.length === 0) {
    return false;
  }

  if (cb(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), cb);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(arr) {
  if (arr.length === 0) {
    return [];
  }

  if (Array.isArray(arr[0])) {
    return [...flatten(arr[0]), ...flatten(arr.slice(1))];
  }

  return [arr[0], ...flatten(arr.slice(1))];
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

const capitalizeFirst = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const toCapital = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return [toCapital(arr[0]), ...capitalizeFirst(arr.slice(1))];
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

const nestedEvenSum = (obj) => {
  let total = 0;

  if (typeof obj === 'object') {
    let keys = Object.keys(obj);

    for (let key of keys) {
      let val = obj[key];

      if (typeof val === 'number' && val % 2 === 0) {
        total += val;
      } else if (typeof val === 'object') {
        total += nestedEvenSum(val);
      }
    }
  }

  return total;
};

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

const capitalizedWords = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  return [arr[0].toUpperCase(), ...capitalizedWords(arr.slice(1))];
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

const stringifyNumbers = (obj) => {
  let updatedObj = Object.assign({}, obj);

  for (let key in updatedObj) {
    let val = updatedObj[key];

    if (typeof val === 'number') {
      updatedObj[key] = val.toString();
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      updatedObj[key] = stringifyNumbers(updatedObj[key]);
    }
  }

  return updatedObj;
};

let numObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(numObj));

const collectStrings = (obj) => {
  if (typeof obj === 'string') {
    return [obj];
  }

  let strings = [];

  for (let key in obj) {
    strings = [...strings, ...collectStrings(obj[key])];
  }

  return strings;
};

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
