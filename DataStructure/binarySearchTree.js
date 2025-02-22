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

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
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
}
