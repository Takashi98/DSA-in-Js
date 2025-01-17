// Merge sort is a sorting algorithm that uses a divide-and-conquer strategy to sort a list of items.
// It's considered one of the most efficient sorting algorithms.

// first writting the code for merging two sorted array

function MergeTwoSortedArray(array1, array2){
    if(array1.length && array2.length === 0) return false
    let result = []
    let i = 0; 
    let j = 0;
    
    while(i< array1.length && j<array2.length){
        if(array2[j]> array1[i]){
            result.push(array1[i])
            i++
        }else{
            result.push(array2[j])
            j++
        }
    }
    while(i<array1.length){
        result.push(array1[i])
        i++
    }
    while(j<array2.length){
        result.push(array2[j])
        j++
    }

    return result
}

console.log(MergeTwoSortedArray([1,2,3],[4,5,6,7]))