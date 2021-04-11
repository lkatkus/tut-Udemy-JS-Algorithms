class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue) {
    if (newValue > this.value) {
      // Right
      if (this.right) {
        this.right.insert(newValue);
      } else {
        this.right = new Node(newValue);
      }
    } else {
      // Left
      if (this.left) {
        this.left.insert(newValue);
      } else {
        this.left = new Node(newValue);
      }
    }
  }

  find(findValue) {
    if (findValue === this.value) {
      return this;
    } else if (findValue > this.value) {
      // Right
      if (this.right !== null) {
        return this.right.find(findValue);
      }
    } else {
      // Left
      if (this.left !== null) {
        return this.left.find(findValue);
      }
    }

    return false;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(newValue) {
    if (this.root === null) {
      this.root = new Node(newValue);
    } else if (newValue > this.root.value) {
      // Right
      if (this.root.right !== null) {
        this.root.right.insert(newValue);
      } else {
        this.root.right = new Node(newValue);
      }
    } else {
      // Left
      if (this.root.left !== null) {
        this.root.left.insert(newValue);
      } else {
        this.root.left = new Node(newValue);
      }
    }
  }

  insertIter(newValue) {
    let inserted = false;
    let node = this.root;

    if (!this.root) {
      this.root = new Node(newValue);
      inserted = true;
    }

    while (!inserted) {
      if (!node) {
        node = new Node(newValue);
        inserted = true;
      } else if (newValue < node.value) {
        if (!node.left) {
          node.left = new Node(newValue);
          inserted = true;
        } else {
          node = node.left;
        }
      } else if (newValue > node.value) {
        if (!node.right) {
          node.right = new Node(newValue);
          inserted = true;
        } else {
          node = node.right;
        }
      }
    }
  }

  find(findValue) {
    if (this.root.value === findValue) {
      return this.root;
    } else if (findValue > this.root.value) {
      // Right
      if (this.root.right !== null) {
        return this.root.right.find(findValue);
      }
    } else {
      // Left
      if (this.root.left !== null) {
        return this.root.left.find(findValue);
      }
    }

    return false;
  }

  findIterative(findValue) {
    if (this.root === null) {
      return false;
    }

    let found = false;
    let current = this.root;

    while (current && !found) {
      if (findValue < current.value) {
        current = current.left;
      } else if (findValue > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return false;
    }

    return current;
  }

  bfs() {
    let data = [];
    let node = this.root;
    let queue = [node];

    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  preOrder(node) {
    let nodeData = [];

    nodeData.push(node.value);

    if (node.left) {
      nodeData.push(...this.preOrder(node.left));
    }
    if (node.right) {
      nodeData.push(...this.preOrder(node.right));
    }

    return nodeData;
  }

  dfsPreOrder() {
    let data = [];
    let node = this.root;

    data.push(...this.preOrder(node));

    return data;
  }

  postOrder(node) {
    let nodeData = [];

    if (node.left) {
      nodeData.push(...this.postOrder(node.left));
    }
    if (node.right) {
      nodeData.push(...this.postOrder(node.right));
    }

    nodeData.push(node.value);

    return nodeData;
  }

  dfsPostOrder() {
    let data = [];
    let node = this.root;

    data.push(...this.postOrder(node));

    return data;
  }

  inOrder(node) {
    let nodeData = [];

    if (node.left) {
      nodeData.push(...this.inOrder(node.left));
    }

    nodeData.push(node.value);

    if (node.right) {
      nodeData.push(...this.inOrder(node.right));
    }

    return nodeData;
  }

  dfsInOrder() {
    let data = [];
    let node = this.root;

    data.push(...this.inOrder(node));

    return data;
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);

tree.insertIter(10);
tree.insertIter(6);
tree.insertIter(15);
tree.insertIter(3);
tree.insertIter(8);
tree.insertIter(20);

console.log(tree.find(10));
console.log(tree.findIterative(10));
console.log(tree.find(99));
console.log(tree.findIterative(99));

console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
