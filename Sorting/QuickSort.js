function QuickSort(array){
     // Base case: If the array has 1 or no elements, it is already sorted
    if(array.length<=1) return array

   let pivot = array[array.length-1]

    // Elements smaller than the pivot
   let left = []

    // Elements greater than the pivot
   let right = []

    // Step 2: Partition the array

    for(let i=0; i<array.length-1; i++){
        if(array[i] < pivot){
        left.push(array[i])
        } else{
        right.push(array[i])
        }     
    }
    
    let leftSorted = QuickSort(left)
    let rightSorted = QuickSort(right)

    return [...leftSorted, pivot, ...rightSorted]

}

console.log(QuickSort([4,1,3,7,8,6]))