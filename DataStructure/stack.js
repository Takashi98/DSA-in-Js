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

   unshift(value){
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

   shift(){
        if(!this.head) return false;

        let removeNode = this.head;
        
        removeNode.next= this.head;

        removeNode = null;

        this.length--;

        if(this.length ===0) return this.tail = null;




   }


}

