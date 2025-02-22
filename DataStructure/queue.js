class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null; 
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.start){
            this.start = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return newNode;
    }

    dequeue(){
        if(!this.start) return undefined;
        let removeNode = this.start;

        
        this.start = removeNode.next;
        if(!this.start){
            this.tail = null;
        }
        this.length--;
        return removeNode;

    }
}