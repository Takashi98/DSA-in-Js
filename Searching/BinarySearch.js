// Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

function BinarySearch(array, val){ // sorted array
    if(array.length === 0) return 'array is empty' // checking if the array have elements or not

    let left = 0;
    let right = array.length - 1;

    while(left<= right){
        let middle = Math.floor((left+right)/2)
        if(array[middle] === val){
            return 1
        } else if (array[middle] < val) {
            left = middle +1
        } else{
            right = middle-1
        }
    }
    return -1
}

// console.log(BinarySearch([1,2,3,4,5,6], 7))


function StringBinarySearch(long, short){
    for(let i=0; i<long.length; i++){
        console.log(long[i])
        for(let j=0; j<short.length; j++){
            console.log(short[j])
        }
    }
}

console.log(StringBinarySearch('papuchup','papu'))