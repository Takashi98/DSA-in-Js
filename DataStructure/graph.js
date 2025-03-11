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

  depthFirstRecursive(start){
    let result = [];
    let visited = {};
    let adjenancyList = this.adjenancy;
    
    // imidiate invokation
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjenancyList[vertex].forEach(child => {
        if(!visited[child]){
          return dfs(child);
        }
      })
    }) (start)
    return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A","C")
graph.addEdge("B","D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph);

console.log(graph.depthFirstRecursive("A"));



