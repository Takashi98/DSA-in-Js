class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true){
      if(value<current.value){
        if(!current.left){
          current.left = newNode;
          return this;
        }else{
          current = current.left;
        }
      }else if(value > current.value){
        if(!current.right){
          current.right = newNode;
          return this;
        }else{
          current = current.right;
        }
      }
    }
     
  }

  find(value){
    if(!this.root) return false;
    let current = this.root;
    while(current !== null){
      if(value === current.value){
        return true;
      }else if(value < current.value){
          current = current.left;
      }else{
        current = current.right;
      }
    }
    return false;  
  } 

  breadthFirstSearch(){
    let queue = [];
    let result = [];
    let current = this.root;
    if(!this.root) return [];
    queue.push(current);

    while(queue.length){
      current = queue.shift()
      result.push(current);
      if(current.left){
        queue.push(current.left);
      }
      if(current.rigth){
        queue.push(current.right)
      }
    }
    return result;
  }
  
}






























let tree = new BinarySearchTree;
tree.insert(11);
tree.insert(2);
tree.insert(50);
tree.insert(23);
tree.insert(12);
tree.insert(56);
// console.log(tree);

tree.find(2);

console.log(tree);

