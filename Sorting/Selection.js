function SelectionSort(array){
    if(array.length === 0) return false
    for(let i =0; i<array.length; i++){
        let min = i
        for(let j= i+1; j<array.length; j++){
            if(array[j]< array[min]){
                min = j
            }
        }
        /// swap
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
        
    }
    return array
}




function SelectionSortwithSomeCorrection(array){
    if(array.length === 0) return false
    for(let i=0; i<array.length-1; i++){
        let min = i
        for(let j=i+1; j<array.length-1; j++){
            if(array[j]<array[min]){
                array[j] = min
            }
        }
        // swap 
        if(min !== i){
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
        }
    }
    return array
}

console.log(SelectionSort([3,1,5,6,7]))