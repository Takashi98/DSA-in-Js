//                                 What is Sliding Window?
// The Sliding Window technique is used to solve problems related to subarrays or substrings in an efficient way.
// Instead of iterating through every possible subarray (which is brute force), this technique creates a "window" of elements and slides it across the array to find the solution.

            // Steps to Apply Sliding Window:
// Initialize variables:
// Start and end pointers for the window.
// Variables to track results (like max sum, min length, etc.).
// Expand the window by moving the end pointer.
// Shrink the window by moving the start pointer when certain conditions are met.
// Keep track of the desired result during the proces



// 1. Fixed-size Window

// Problem: Find the maximum sum of any subarray of size k.
// Example Input: [2, 1, 5, 1, 3, 2], k = 3
// Goal: Subarray [5, 1, 3] has the maximum sum of 9.


function fixedSizedWindow(array,k){
    if(array.length === 0) return 'empty array'

    let windowSum = 0;
    let maxSum = 0;
    let start =  0

    // let do the sum of first window
    for(let i =0; i<k; i++){
        windowSum = windowSum+array[i]
    }
    maxSum = windowSum;
    for (let end = k; end < array.length; end++) {
        console.log(array[end]);
        console.log(array[start]);
        
        
        console.log(windowSum += array[end] - array[start]);
        windowSum += array[end] - array[start];
        console.log(windowSum += array[end] - array[start]);
        //node console.log(array[end], array[start])
        start++;
        maxSum = Math.max(maxSum, windowSum);
    }
    
}

// console.log(fixedSizedWindow([1,2,3,4,5],3));

function recursion(num){
    if(num<=0){
        console.log('all done')
        return
        
    }
    num--
    console.log(num)
    recursion(num)

}

// recursion(3)

function factorial(num){
    if(num<=0){
        return 1;
    }
   return num*factorial(num-1)
}

console.log(factorial(3));
