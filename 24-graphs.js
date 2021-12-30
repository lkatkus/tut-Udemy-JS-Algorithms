class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  removeVertex(v1) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].forEach((v) => {
        this.removeEdge(v1, v);
      });

      delete this.adjacencyList[v1];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }
}

const g = new Graph();

g.addVertex('Tokyo');
g.addVertex('New York');
g.addVertex('San Francisco');
g.addVertex('Aspen');
console.log(g);

g.addEdge('Tokyo', 'New York');
g.addEdge('New York', 'San Francisco');
g.addEdge('New York', 'Aspen');
g.addEdge('Tokyo', 'Aspen');
g.addEdge('Tokyo', 'San Francisco');
console.log(g);

g.removeEdge('New York', 'San Francisco');
console.log(g);

g.removeEdge('New York', 'Tokyo');
console.log(g);

g.addEdge('New York', 'San Francisco');
g.addEdge('New York', 'Tokyo');
console.log(g);

g.removeVertex('New York');
console.log(g);
