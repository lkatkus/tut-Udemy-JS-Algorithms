const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const f1 = getFrequency(str1);
  const f2 = getFrequency(str2);

  if (!compareFrequency(f1, f2)) {
    return false;
  }

  return true;
};

const getFrequency = (str) => {
  const frequency = {};

  for (let char of str) {
    frequency[char] = ++frequency[char] || 1;
  }

  return frequency;
};

const compareFrequency = (f1, f2) => {
  for (let key in f1) {
    if (f1[key] !== f2[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram('aaz', 'zaa'));
console.log(validAnagram('zaz', 'aza'));
console.log(validAnagram('anagram', 'nagaram'));
