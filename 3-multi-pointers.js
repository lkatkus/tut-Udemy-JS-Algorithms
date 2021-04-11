const sumZero = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let sum = arr[p1] + arr[p2];

    if (sum === 0) {
      return [arr[p1], arr[p2]];
    } else if (sum > 0) {
      p2--;
    } else {
      p1++;
    }
  }

  return;
};

console.log('Zero pair:', sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let p1 = 0;
  let p2 = 1;
  let uniqueValues = 0;

  while (p1 < arr.length) {
    if (arr[p1] === arr[p2]) {
      p2 += 1;
    } else {
      p1 = p2;
      p2 += 1;
      uniqueValues += 1;
    }
  }

  return uniqueValues;
};

console.log('Unique values:', countUniqueValues([1, 1, 1, 2, 2, 3, 4]));
