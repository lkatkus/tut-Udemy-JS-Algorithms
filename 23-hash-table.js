const hash = (key, arrLength) => {
  let total = 0;

  for (let char of key) {
    total += char.charCodeAt(0) - 96;
  }

  return total % arrLength;
};

const betterHash = (key, arrLength) => {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * WEIRD_PRIME + value) % arrLength;
  }

  return total;
};

console.log(hash('pink', 10));
console.log(betterHash('hello', 13));
console.log(betterHash('hi', 13));
console.log(betterHash('pink', 13));
console.log(betterHash('cyan', 13));

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return index;
  }

  get(key) {
    let index = this._hash(key);
    let indexValue = this.keyMap[index];

    if (indexValue === undefined) {
      return undefined;
    } else if (indexValue.length > 1) {
      const value = indexValue.find((value) => value[0] === key);

      if (value) {
        return value[1];
      }
    } else if (indexValue[0][0] === key) {
      return indexValue[0][1];
    }

    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      let indexValue = this.keyMap[i];

      if (indexValue) {
        if (indexValue.length === 1) {
          keys.push(indexValue[0][0]);
        } else {
          for (let j = 0; j < indexValue.length; j++) {
            let nestedIndexValue = indexValue[j];

            keys.push(nestedIndexValue[0]);
          }
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      let indexValue = this.keyMap[i];

      if (indexValue) {
        if (indexValue.length === 1) {
          let newValue = indexValue[0][1];

          if (!values.includes(newValue)) {
            values.push(newValue);
          }
        } else {
          for (let j = 0; j < indexValue.length; j++) {
            let nestedIndexValue = indexValue[j];
            let newValue = nestedIndexValue[1];

            if (!values.includes(newValue)) {
              values.push(newValue);
            }
          }
        }
      }
    }

    return values;
  }
}

let ht = new HashTable(10);

console.log('====================================');
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('salman', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log('====================================');
console.log('hello', ht.get('hello'));
console.log('salmon', ht.get('salmon'));
console.log('salman', ht.get('salman'));
console.log('olive', ht.get('olive'));
console.log('yellow', ht.get('yellow'));
console.log('maroon', ht.get('maroon'));
console.log('salmun', ht.get('salmun'));

console.log('====================================');
console.log(ht.keys());
console.log(ht.values());
