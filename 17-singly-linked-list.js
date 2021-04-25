class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getNext() {
    return this.next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  shift() {
    let currentHead = this.head;

    if (!currentHead) {
      return;
    } else if (currentHead === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentHead;
    }

    this.head = currentHead.next;
    this.length -= 1;

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    let currentNode = this.head;

    if (!currentNode) {
      return;
    } else if (currentNode === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentNode;
    }

    while (currentNode.next) {
      if (currentNode.next === this.tail) {
        let currentTail = this.tail;

        this.tail = currentNode;
        this.tail.next = null;
        this.length -= 1;

        return currentTail;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  get(i) {
    if (i < 0 || i > this.length - 1) {
      return;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter <= i) {
      if (counter === i) {
        return currentNode;
      }

      currentNode = currentNode.next;
      counter++;
    }
  }

  set(i, newValue) {
    let foundNode = this.get(i);

    if (foundNode) {
      foundNode.value = newValue;
      return true;
    }

    return false;
  }

  insert(i, newValue) {
    if (i - 1 < 0 || i > this.length) {
      return false;
    } else if (i === this.length) {
      return !!this.push(newValue);
    } else if (i === 0) {
      return !!this.unshift(newValue);
    }

    let prevNode = this.get(i - 1);
    let newNode = new Node(newValue);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;

    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) {
      return false;
    } else if (i === 0) {
      return this.shift();
    } else if (i === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(i - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  traverse() {
    let currentNode = this.head;
    let values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    // for (let i = 0; i < this.length; i++) {
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }

    while (next !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const list = new SinglyLinkedList();

list.push('Hello');
list.push('Goodbye');
list.push('!');
list.push(99);

console.log('--- pop ---');
console.log(list.pop(), list.length);
console.log(list.pop(), list.length);
console.log(list.pop(), list.length);
console.log(list.pop(), list.length);
console.log(list);

console.log('--- push ---');
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

console.log('--- shift ---');
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list);

console.log('--- unshift ---');
console.log(list.unshift(1));
console.log(list.unshift(2));
console.log(list.unshift(3));

console.log('--- get ---');
console.log('get', list.get(3));
console.log('get', list.get(2));
console.log('get', list.get(0));

console.log('--- set ---');
console.log('get', list.get(1));
console.log('get', list.set(1, 'Updated value'));
console.log('get', list.get(1));

console.log('--- insert ---');
console.log('insert', list.insert(1, 'Inserted value'));
console.log('insert', list.insert(1, 'Some'));
console.log('insert', list.insert(1, 'Other'));
console.log('get', list.get(0));
console.log('get', list.get(1));

console.log('--- remove ---');
console.log(list.traverse());
console.log(list.remove(1));
console.log(list.traverse());
console.log(list.remove(0));
console.log(list.traverse());

console.log('--- reverse ---');
console.log(list.traverse());
console.log(list.reverse());
console.log(list.traverse());
console.log(list.reverse());
console.log(list.traverse());
