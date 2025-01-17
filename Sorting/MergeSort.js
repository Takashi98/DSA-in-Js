// Merge sort is a sorting algorithm that uses a divide-and-conquer strategy to sort a list of items.
// It's considered one of the most efficient sorting algorithms.

// first writting the code for merging two sorted array

function MergeSort(array){
    if(array.length <= 1) return array

    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    let sortedLeft = MergeSort(left)
    let sortedRight = MergeSort(right)

    // merge two sorted array
    // console.log(sortedLeft, sortedRight)

    let fuckMe = MergeSorted(sortedLeft,sortedRight)


    return fuckMe

}

function MergeSorted(array1, array2){
    if(array1.length && array2.length ===0) return []
    let result = []
    let i =0;
    let j=0;
    while(i<array1.length && j<array2.length){
        if(array2[j]>array1[i]){
            result.push(array1[i])
            i++
        }else {
            result.push(array2[j])
            j++
        }
    }

    while(i< array1.length){
        result.push(array1[i])
        i++
    }
    while(j<array2.length){
        result.push(array2[j])
        j++
    }

    return result

}

console.log(MergeSort([15,2,5,67,4,33,22,667]))

