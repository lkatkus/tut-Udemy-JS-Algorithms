const getDigit = (num, pos) => {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const getDigitCount = (num) => {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMaxDigit = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentDigits = getDigitCount(arr[i]);

    if (currentDigits > max) {
      max = currentDigits;
    }
  }

  return max;
};

const radixSort = (arr) => {
  let sortedList = [...arr];
  let sortTimes = getMaxDigit(arr);

  for (let k = 0; k < sortTimes; k++) {
    let bucketList = [];
    // let bucketList = Array.from({ length: 10 }, () => []);

    for (let b = 0; b < 10; b++) {
      bucketList[b] = [];
    }

    for (let i = 0; i < sortedList.length; i++) {
      let bucketIndex = getDigit(sortedList[i], k);

      bucketList[bucketIndex].push(sortedList[i]);
    }

    sortedList = bucketList.flat();
  }

  return sortedList;
};

console.log(radixSort([10020, 31, 1, 3, 555]));
