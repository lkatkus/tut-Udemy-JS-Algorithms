const VALUES = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(i) {
    const current = i;
    const parent = Math.floor((current - 1) / 2);

    if (this.values[current] > this.values[parent]) {
      [this.values[current], this.values[parent]] = [
        this.values[parent],
        this.values[current],
      ];

      this.bubbleUp(parent);
    }
  }

  sinkDown(i) {
    const current = this.values[i];
    const left = 2 * i + 1;
    const leftValue = this.values[left];
    const right = 2 * i + 2;
    const rightValue = this.values[right];

    if (current < leftValue && leftValue > rightValue) {
      [this.values[i], this.values[left]] = [this.values[left], this.values[i]];

      this.sinkDown(left);

      return;
    } else if (current < rightValue) {
      [this.values[i], this.values[right]] = [
        this.values[right],
        this.values[i],
      ];

      this.sinkDown(right);
    }
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const removedValue = this.values.pop();
    this.sinkDown(0);

    return removedValue;
  }
}

const maxHeap = new MaxBinaryHeap();
const insertHeap = new MaxBinaryHeap();
const extractHeap = new MaxBinaryHeap();

console.log('--- maxHeap ---');
console.log(maxHeap.values);
maxHeap.insert(2);
console.log(maxHeap.values);
maxHeap.insert(6);
console.log(maxHeap.values);
maxHeap.insert(4);
console.log(maxHeap.values);
maxHeap.insert(12);
console.log(maxHeap.values);

console.log('--- insertHeap ---');
insertHeap.insert(41);
insertHeap.insert(39);
insertHeap.insert(33);
insertHeap.insert(18);
insertHeap.insert(27);
insertHeap.insert(12);
console.log(insertHeap.values);
insertHeap.insert(55);
console.log(insertHeap.values);
insertHeap.insert(1);
console.log(insertHeap.values);
insertHeap.insert(45);
console.log(insertHeap.values);
insertHeap.insert(199);

console.log('--- extractHeap ---');
console.log(extractHeap.values);
extractHeap.insert(41);
extractHeap.insert(39);
extractHeap.insert(33);
extractHeap.insert(18);
extractHeap.insert(27);
extractHeap.insert(12);
extractHeap.insert(55);
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
console.log(extractHeap.extractMax());
console.log(extractHeap.values);
