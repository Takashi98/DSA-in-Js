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
}

let okay = new SinglyLinkedList;
okay.push(4).push(5).push(6).push(7).push(8).push(9)
console.log(okay);