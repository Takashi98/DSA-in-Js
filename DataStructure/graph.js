class Graph{
  constructor(){
    this.adjenancy = {};
  }

  addVertex(vertex){
    if(!this.adjenancy[vertex]) return this.adjenancy[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    this.adjenancy[vertex1].push(vertex2);
    this.adjenancy[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2){
    this.adjenancy[vertex1] = this.adjenancy[vertex1].filter(v => v!== vertex2);
    this.adjenancy[vertex2] = this.adjenancy[vertex2].filter(v => v!== vertex1);
  }
  
  removeVertex(vertex){
    while(this.adjenancy[vertex].length){
      let adjVertex = this.adjenancy[vertex].pop();
      this.removeEdge(vertex,adjVertex);
    }
    delete this.adjenancy[vertex];
  }
}

let graph = new Graph();

graph.addVertex("India");
graph.addVertex("China");
graph.addVertex("Newyork");

graph.addEdge("India", "China");
graph.addEdge("China", "Newyork")

graph.removeEdge("India", "China")

graph.removeVertex("India");


console.log(graph); 


