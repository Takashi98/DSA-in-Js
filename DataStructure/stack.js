class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        }else{
        newNode.next = this.head;
        this.head = newNode;
    }
        this.length++;
        return newNode;
   }

    pop(){
      if(!this.head) return undefined;
      let removeNode = this.head;
      this.head = removeNode.next;
      this.length--;
      if(this.length ===0) {
        this.tail = null;
      }

      return removeNode;
   }


}

