const binarySearch = (arr, number) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement === number) {
      return middle;
    } else if (currentElement > number) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
};

console.log('Fount at:', binarySearch([1, 2, 3, 4, 5], 6));
