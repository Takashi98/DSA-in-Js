// Creating pointers or value the correspond to an index or position a move towords the beginning,end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

//question : given sorted array, check if the sum of array is 0 or not 
// example : [-2,1,2,3] sum = 0 and return index means -2 + 2 = 0;

//Naive Solution


function sumZero(array){
    // checking if array have some element if array is empty return 
    if(array.length === 0) return false

    // interate over array by two pointer
    // one start from 0th index and another 0+1th index

    for(let i= 0; i<array.length; i++){
        
        for(let j= i+1; j<array.length; j++){

            // checking if value of array[i] + array[j] == 0 
            // if both element sum is zero return index i and j or value array[i] and array[j]
        
            if(array[i] + array[j] ===0) return [array[i], array[j]]
        }
    }
}

// Time Complexity of this solution is O(N^2)
// we are having nested loop if the array grows number of interation will grows


// console.log(sumZero([-1,0,1,2,3]))

// REFACTOR 
// time complexity will be O(N) 
// better than naive solution

//////         IMPORTANT   for this you always need sorted array

function RefactorSolution(array){
    // if the array is not empty or not, if empty return false
    if(array.length === 0) return 'no element found'
    // using two pointer here
    // left start one 0;
    // right start from array.length -1 means end of the array

    let left = 0;
    let right = array.length - 1;
    
    // now we will loop over the array
    
    while(left<right){
        // we do sum of left and right 
        let sum = array[left] + array[right];
        // if the sum is zero thats mean we find the those element or index
        if(sum === 0){
            return [array[left], array[right]]
            //if not sum is not 0 
        } else if(sum>0){
            right --
        } else{
            left ++
        }

    }
}

// console.log(RefactorSolution([-2,-1,0,2,3]))

// if you want to check whole array that how many value and index have sum of 0

function WholeArray(array){
    if(array.length === 0) return "empty array"
    // define pointers and empty array where we push values
    let left = 0;
    let right = array.length - 1;
    let result = [];

    while(left<right){
        let sum = array[left] + array[right]
        if(sum === 0){
            result.push([array[left], array[right]])
            left++ 
            right--
        }else if (sum>0){
            right--
        }else {
            left++
        }
    }
    return result.length > 0 ? result : 'didnt found'
    // i hope this will make sense as well
}

console.log(WholeArray([-2,-1,1,2,3]))