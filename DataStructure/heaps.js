class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    let element = this.value[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentValue = this.value[parentIndex];
      if (element <= parentValue) break;
      this.value[parentIndex] = element;
      this.value[index] = parentValue;
      index = parentIndex;
    }
  }

  ExtractMax(){
    let max = this.value[0];
    let end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();
    return max;

  }
  sinkDown(){
    let idx = 0;
    let length = this.value.length;
    let element = this.value[idx];

    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rigthChildIdx = 2 * idx + 2;
        let leftChild,rightChild;
        let swap = null;
        if(leftChildIdx < length){
            leftChild = this.value[leftChildIdx];
            if(leftChild > element){
                swap =  leftChildIdx;
            }
        }
        if(rigthChildIdx < length) {
            rightChild = this.value[rigthChildIdx];
            if(
                (swap === null && rightChild>element) ||
                (swap !== null && rightChild>leftChild)
            ){
                swap = rigthChildIdx
            }
        }

        if(swap === null) return null;
        this.value[idx] = this.value[swap];
        this.value[swap] = element;
        idx = swap;

    }
  }
}
