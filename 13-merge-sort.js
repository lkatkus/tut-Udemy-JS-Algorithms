const merge = (left, right) => {
  let p1 = 0;
  let p2 = 0;
  let sortedArr = [];

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      sortedArr.push(left[p1]);
      p1++;
    } else {
      sortedArr.push(right[p2]);
      p2++;
    }
  }

  while (p1 < left.length) {
    sortedArr.push(left[p1]);
    p1++;
  }

  while (p2 < right.length) {
    sortedArr.push(right[p2]);
    p2++;
  }

  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([3, 44, 38, 5, 11, 1, 123, 99, 0, -1, -99]));
