class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(i) {
    const current = i;
    const currentValue = this.values[current];
    const parent = Math.floor((current - 1) / 2);
    const parentValue = this.values[parent];

    if (currentValue.priority > parentValue?.priority) {
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

    if (
      current?.priority < leftValue?.priority &&
      leftValue?.priority > rightValue?.priority
    ) {
      [this.values[i], this.values[left]] = [this.values[left], this.values[i]];

      this.sinkDown(left);

      return;
    } else if (current?.priority < rightValue?.priority) {
      [this.values[i], this.values[right]] = [
        this.values[right],
        this.values[i],
      ];

      this.sinkDown(right);
    }
  }

  dequeue() {
    if (
      this.values[0].priority > this.values[this.values.length - 1].priority
    ) {
      [this.values[0], this.values[this.values.length - 1]] = [
        this.values[this.values.length - 1],
        this.values[0],
      ];
      const removedValue = this.values.pop();
      this.sinkDown(0);

      return removedValue;
    }

    const removedValue = this.values.pop();
    this.sinkDown(0);

    return removedValue;
  }
}

let line = new PriorityQueue();

line.enqueue('glass in foot', 3);
line.enqueue('high fever', 2);
line.enqueue('common cold', 1);
line.enqueue('gunshot wound', 10);
line.enqueue('glass in foot', 5);
line.enqueue('glass in foot', 6);
line.enqueue('broken arm 2', 8);
line.enqueue('broken arm 2', 9);
console.log(line);

console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
