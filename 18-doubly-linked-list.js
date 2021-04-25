class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }

  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return oldTail;
    }

    const newTail = oldTail.prev;

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    oldTail.prev = null;

    return oldTail;
  }

  shift() {
    if (this.length === 0) {
      return;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return oldHead;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;

    this.length -= 1;

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }

  get(i) {
    if (i < 0 || i > this.length - 1) {
      return null;
    }

    if (i < this.length / 2) {
      let currentNode = this.head;
      let counter = 0;

      while (counter <= i) {
        if (counter === i) {
          return currentNode;
        }

        currentNode = currentNode.next;
        counter += 1;
      }
    } else {
      let currentNode = this.tail;
      let counter = this.length - 1;

      while (counter >= i) {
        if (counter === i) {
          return currentNode;
        }

        currentNode = currentNode.prev;
        counter -= 1;
      }
    }
  }

  set(i, val) {
    if (i < 0 || i > this.length - 1) {
      return false;
    }

    const node = this.get(i);

    node.val = val;

    return true;
  }

  insert(i, value) {
    if (i === 0) {
      return this.unshift(value);
    } else if (i === this.length - 1) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const foundNode = this.get(i - 1);

    if (!foundNode) {
      return;
    }

    newNode.prev = foundNode;
    newNode.next = foundNode.next;
    newNode.prev.next = newNode;
    newNode.next.prev = newNode;

    this.length += 1;

    return this;
  }

  remove(i) {
    if (i < 0 || i > this.length - 1) {
      return;
    } else if (i === 0) {
      return this.shift();
    } else if (i === this.length - 1) {
      return this.pop();
    }

    const foundNode = this.get(i);

    if (!foundNode) {
      return;
    }

    const newPrev = foundNode.prev;
    const newNext = foundNode.next;

    newPrev.next = newNext;
    newNext.prev = newPrev;
    foundNode.next = null;
    foundNode.prev = null;

    this.length -= 1;

    return foundNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let next;
    let prev = null;

    while (next !== null) {
      next = currentNode.next;
      currentNode.next = prev;
      currentNode.prev = next;
      prev = currentNode;
      currentNode = next;
    }

    return this
  }

  traverse() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return values;
  }

  traverseBack() {
    const values = [];
    let currentNode = this.tail;

    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.prev;
    }

    return values;
  }
}

const list = new DoublyLinkedList();

console.log('--- push ---');
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.traverse());
console.log(list.traverseBack());

console.log('--- pop ---');
console.log(list.pop());
console.log(list.pop());
console.log(list.traverse());

console.log('--- shift ---');
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
console.log(list.traverse());
console.log(list.shift());
console.log(list.traverse());

console.log('--- unshift ---');
console.log(list.traverse());
console.log(list.unshift(1));
console.log(list.traverse());

console.log('--- get ---');
console.log(list.get(0));
console.log(list.get(7));

console.log('--- set ---');
list.set(0, 'new @ 0');
console.log(list.traverse());
list.set(5, 'new @ 5');
console.log(list.traverse());
list.set(7, 'new @ 7');
console.log(list.traverse());

console.log('--- insert ---');
console.log(list.traverse());
list.insert(0, 'insert @ 0');
console.log(list.traverse());
list.insert(8, 'insert @ 8');
console.log(list.traverse());
list.insert(3, 'insert @ 3');
console.log(list.traverse());
list.insert(5, 'insert @ 5');
console.log(list.traverse());

console.log('--- remove ---');
console.log(list.length, list.traverse());
list.remove(2);
console.log(list.length, list.traverse());
list.remove(3);
console.log(list.length, list.traverse());
list.remove(0);
console.log(list.length, list.traverse());
list.remove(8);
console.log(list.length, list.traverse());

console.log('--- reverse ---');
console.log(list.traverse());
list.reverse();
console.log(list.traverse());
