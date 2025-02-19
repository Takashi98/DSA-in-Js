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

    unshift(value){
        let addVal = new Node(value);
        if(!this.head){
            this.head = addVal;
            this.tail = addVal;
        }else{
            addVal.next = this.head;
            this.head = addVal;
        }
        this.length++;
        return addVal;
    }
    

    get(index){
        if(index <0 || index>=this.length) return undefined;
        let current = this.head;
        let counter = 0;
        while(counter!= index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value){
        if(index<0 || index>=this.length) return false;
        let getValue = this.get(index);
        if(getValue){
            getValue.value = value;
            return true;
        }else{
            return false;
        }
        
    }

    insert(index, value){
        if(index<0 || index > this.length) return false;
        if(index===0) return this.unshift(value)
        if(index == this.length) return this.push(value) 
        let newNode = new Node(value);
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index<0 || index > this.length) return undefined;
        if(index ===0) return this.shift()
        if(index === this.length-1) return this.pop();
        let prev = this.get(index-1);
        let remove = prev.next;
        prev.next = remove.next;
        remove.next = null;
        this.length--;
        return remove;
    }




}

let list = new SinglyLinkedList;

list.push(11).push(12).push(13);
console.log(list);
list.shift();
console.log(list);

