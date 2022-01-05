const { PriorityQueue } = require('./22-priority-queue');

class WeightedGraph {
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

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (v) => v.node !== v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (v) => v.node !== v1
      );
    }
  }

  dijkstra(start, finish) {
    const path = [];
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    let smallest;

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        let current = finish;
        path.unshift(current);

        while (previous[current] !== null) {
          path.unshift(previous[current]);
          current = previous[current];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate distance to neighbor node
          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNode.node] = smallest;

            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }

    return path;
  }
}

const q = new PriorityQueue();

q.enqueue('B', 3);
q.enqueue('C', 5);
q.enqueue('D', 2);
q.enqueue('Q', 20);
q.enqueue('P', 1.5);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log('====================================');

const wg = new WeightedGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');
console.log(wg.adjacencyList);

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('F', 'E', 1);
console.log(wg.adjacencyList);

console.log('====================================');

console.log('wg.dijkstra', wg.dijkstra('A', 'E'));
console.log('wg.dijkstra', wg.dijkstra('A', 'C'));
console.log('wg.dijkstra', wg.dijkstra('A', 'F'));
