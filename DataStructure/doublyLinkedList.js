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
                counter--;
            }
            return current;
        }
    }

    set(index, value){
        if(index<0 || index>= this.length) return false;
        let getValue = this.get(index);
        if(getValue){
            getValue.value = value;
            return true;
        }
        return false;
        
    }

    insert(index, value){
        if(index<0 || index>this.length) return false;
        if(index ===0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);

        let newNode = new Node(value);

        let previousNode = this.get(index-1);
        if(!previousNode) return false;
        let nextNode = previousNode.next;

        previousNode.next = newNode;
        newNode.prev = previousNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;


    }
    remove(index){
        if(index<0 || index >= this.length) return undefined;
        if(index ===0) return this.shift();
        if(index ===this.length-1)  return this.pop();
        let deletedNode = this.get(index);
        if(!deletedNode) return undefined;
        let nextNode = deletedNode.next;
        let prevNode = deletedNode.prev;
        if(nextNode) nextNode.prev = prevNode;
        if(prevNode) prevNode.next = nextNode;

        deletedNode.next = null;
        deletedNode.prev = null;
        this.length--;
        return deletedNode;
    }    
}
