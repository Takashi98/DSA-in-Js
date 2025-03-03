class BinaryHeap{
    constructor(){
        this.value = [];
    }

    insert(element){
        this.value.push(element);
        this.BubbleUp();
    }

    BubbleUp(){
        let index = this.value.length -1;
        let insertValue = this.value[index];

        while(index > 0){
            let parentIndex = Math.floor((index -1)/2);
            let parentValue = this.value[parentIndex];
            
            if(parentValue > insertValue) break;

            this.value[parentIndex] = insertValue;
            this.value[index] = parentValue;


            index = parentIndex;
        }
    }
}