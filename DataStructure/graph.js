class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let graph = new Graph();

graph.addVertex("randi");
graph.addVertex("hiii");
graph.addVertex("there")
console.log(graph);

graph.addEdge("randi","hiii");
console.log(graph);



