const swap = (arr, i1, i2) => {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
};

const bubbleSort = (arr) => {
  let noSwaps = true;
  let sortedArr = [...arr];

  for (let i = sortedArr.length - 1; i >= 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        noSwaps = false;
        swap(sortedArr, j, j + 1);
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return sortedArr;
};

console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([8, 1, 2, 3, 4]));
