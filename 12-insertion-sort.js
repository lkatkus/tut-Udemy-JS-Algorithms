const insertionSort = (arr) => {
  let sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    let currentVal = sortedArr[i];

    for (let j = i - 1; j >= 0 && sortedArr[j] > currentVal; j--) {
      sortedArr[j + 1] = sortedArr[j];
      sortedArr[j] = currentVal;
    }
  }

  return sortedArr;
};

console.log(insertionSort([100, 2, 1, 76, 9, 4]));
