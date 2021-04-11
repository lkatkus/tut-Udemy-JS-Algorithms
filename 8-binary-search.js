const binarySearch = (arr, el) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  let mid = Math.floor((p1 + p2) / 2);

  while (p1 <= p2) {
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      p1 = mid + 1;
    } else {
      p2 = mid - 1;
    }

    mid = Math.floor((p1 + p2) / 2);
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));
