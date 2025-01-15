function BubbleSort(array){
    if(array.length ===0) return false
    for(let i = 0; i<array.length; i++){
        console.log(array[i])
        for(let j= 0; j<array.length; j++){
            
            if(array[j]> array[j+1]){
                //swap  
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

// console.log(BubbleSort([45,21,55,23]))

function sort(array){
    if(array.length === 0) return false
    for(let i=0; i<array.length -1; i++){
        let swap = false
        for(let j=0; j<array.length -1 -i; j++){
            if(array[j]> array[j+1]){
                // swap
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                swap = true
               }
        }
       if(!swap){
        break
       }
    }
    return array
}

console.log(sort([45,21,55,23]))

