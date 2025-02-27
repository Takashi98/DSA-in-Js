class MaxBinaryHeap{
    constructor(){
        this.value = [];
    }

    insert(element){
        this.value.push(element);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let index = this.value.length-1;
        let element = this.value[index];

        while(index>0){
        let parentIdx = Math.floor((index-1)/2);
        let parent = this.value[parentIdx];
        if(element <= parent) break;
        this.value[parentIdx] = element;
        this.value[index] = parent;
        index = parentIdx;
    }

    }
}