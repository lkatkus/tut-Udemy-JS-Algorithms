const stringSearch = (str, pattern) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === pattern[0]) {
      let inc = 1;

      for (let j = 1; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) {
          break;
        } else {
          inc++;

          if (inc === pattern.length) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

console.log(stringSearch('lorie loled', 'lol'));
console.log(stringSearch('lorie loled', 'pop'));
