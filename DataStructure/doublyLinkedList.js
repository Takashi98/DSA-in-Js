class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail =  newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let removeNode = this.tail;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removeNode.prev;
            this.tail.next = null;
            removeNode.prev = null
        }
        this.length--;
        return removeNode;
    }

    shift(){
        if(!this.head) return undefined;
        let removeVal = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removeVal.next;
            this.head.prev = null;
        }
        this.length--;
        return removeVal;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode; 
        }
        this.length++;
        return newNode;
    }

    get(index){
        if(index<0 || index>= this.length) return undefined;
        let counter =  0;
        let current = this.head;
        if(index<this.length/2){
            while(counter!=index){
                current = current.next;
                counter++;
            }
            return current;
        }else{
            current = this.tail;
            counter = this.length-1;
            while(counter!=index){
                current = current.prev;
                counter--
            }
            return current;
        }
    }
}
      