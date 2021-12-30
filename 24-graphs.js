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

  dfsRecursive(startVert) {
    const { dfs, adjacencyList } = this;
    const results = [];
    const visited = {};

    this.dfs.call({ dfs, results, visited, adjacencyList }, startVert);

    return results;
  }

  dfs(vertex) {
    if (!vertex) {
      return null;
    }

    this.results.push(vertex);
    this.visited[vertex] = true;

    this.adjacencyList[vertex].forEach((v) => {
      if (!this.visited[v]) {
        return this.dfs(v);
      }
    });
  }

  dfsIterative(startVert) {
    let currentVert;
    const stack = [startVert];
    const results = [];
    const visited = {};

    visited[startVert] = true;

    while (stack.length !== 0) {
      currentVert = stack.pop();
      results.push(currentVert);

      this.adjacencyList[currentVert].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          stack.push(n);
        }
      });
    }

    return results;
  }

  bfs(startVert) {
    let currentVert;
    const queue = [startVert];
    const results = [];
    const visited = {};

    while (queue.length > 0) {
      currentVert = queue.shift();

      results.push(currentVert);
      visited[currentVert] = true;

      this.adjacencyList[currentVert].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }

    return results;
  }
}

let g = new Graph();

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

console.log('====================================');

g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('Z');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'Z');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log('dfsr', g.dfsRecursive('A'));
console.log('dfsi', g.dfsIterative('A'));

console.log('====================================');

console.log('bfs', g.bfs('A'));
