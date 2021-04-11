const swap = (arr, i1, i2) => {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
};

const selectionSort = (arr) => {
  let sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[min]) {
        min = j;
      }
    }

    swap(sortedArr, i, min);
  }

  return sortedArr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));
