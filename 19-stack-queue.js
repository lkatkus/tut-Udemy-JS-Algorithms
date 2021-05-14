class ArrayStack {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    return this.values.pop();
  }
}

const basicStack = new ArrayStack();

basicStack.push('first');
basicStack.push('second');
basicStack.push('third');
console.log(basicStack.values);
console.log(basicStack.pop());
console.log(basicStack.values);
console.log(basicStack.pop());
console.log(basicStack.values);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const myStack = new Stack();
console.log('---------');
console.log("myStack.push('1')", myStack.push('1'));
console.log("myStack.push('2')", myStack.push('2'));
console.log("myStack.push('3')", myStack.push('3'));
console.log('myStack.pop()', myStack.pop());
console.log('myStack.pop()', myStack.pop());
console.log('myStack.pop()', myStack.pop());
console.log('myStack.pop()', myStack.pop());

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first;
    this.first = temp.next;
    this.size--;

    return temp.value;
  }
}

const q = new Queue();
console.log('---------');
console.log("q.enqueue('first')", q.enqueue('first'));
console.log("q.enqueue('second')", q.enqueue('second'));
console.log("q.enqueue('third')", q.enqueue('third'));
console.log(q.last);
console.log('q.dequeue()', q.dequeue(), q.size);
console.log('q.dequeue()', q.dequeue(), q.size);
console.log('q.dequeue()', q.dequeue(), q.size);
console.log('q.dequeue()', q.dequeue(), q.size, q.first, q.last);
