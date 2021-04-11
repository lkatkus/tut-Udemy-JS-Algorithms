const swap = (arr, i1, i2) => {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
};

const quickSort = (arr) => {
  let sortedArr = [...arr];

  if (arr.length <= 1) {
    return arr;
  }

  let offset = 0;
  let pivot = sortedArr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sortedArr[i] < pivot) {
      offset++;
      swap(sortedArr, i, offset);
    }
  }

  swap(sortedArr, 0, offset);

  let sortedLeft = quickSort(sortedArr.slice(0, offset));
  let sortedRight = quickSort(sortedArr.slice(offset + 1));

  return [...sortedLeft, pivot, ...sortedRight];
};

console.log(quickSort([6, 2, 12, 38, 5, 2, 3, 11, -1, -99]));
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log(quickSort([1, 2, 3, 4, 5, 6, 7]));
