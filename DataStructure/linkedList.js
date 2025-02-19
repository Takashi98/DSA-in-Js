class Node{
    constructor(value){
        this.value = value;
        this.next = null 
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
           this.tail.next = newNode;
           this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let removeNode = this.head;
        this.head = removeNode.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        } 
        return removeNode;
    }




}

let list = new SinglyLinkedList;

list.push(11).push(12).push(13);
console.log(list);
list.shift();
console.log(list);

