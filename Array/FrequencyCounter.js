//naive soltion of finding one array2 is sqaure of array1 
//examples array1 [1,2,3]  array2 [1,4,9]
//order does not matter, it could either be [1,2,3] [4,1,9]
//because we are having nested loop over here so, time complexity would be O(N^2)

// code : 

function naiveSolution(arr1, arr2){
    // checking edge cases 
    //if the length of both array is not eqaul, return false or undefined
    if(arr1.length !== arr2.length) return false
    //so array's length is equal 
    //now will traverse over arr1
    for(let i=0; i<arr1.length; i++){
        // we are looping over arr1 and will get each element 
        // check that if that arr[i] and check arr2 contain a[i] square or not
        //make another varible which contain if square is availble in arr2 
        let squareChecker = arr2.indexOf(arr1[i] **2)
        // if find the index it give index example 1,2,3 etc
        // if indexOf dont find the value or square of arr1 it will return -1
        // now we will check if there are no value return false
        if(squareChecker === -1) return false
        // now we find the index so we need to remove that element from arr
        // to remove that index we will use splice 
        // what is splice? 
        //:The splice method is used to remove or insert elements in an array.
        arr2.splice(squareChecker,1)
        // we remove the current index using splice
    
    }
     // if all the element matched return true
     return true

}
// time complexcity will be O(N^2) because indexOf is itself a loop under the hood its traverse arr2 and check with 
//... all indivisual element in arr2

// console.log(naiveSolution([1,2,3], [1,4,10]));
 

// better soltution  with time complexity of O(N), where we are not using nested loop instead using three different loop

function FrequencyCounter(arr1,arr2){
    //checking side case, both array should have a equal length
    // if not return false
    //arr1 = [1, 2, 3], arr2 = [1, 4, 9] → Same length ✅
    //arr1 = [1, 2], arr2 = [1, 4, 9] → Not same length ❌ → Return
    if(arr1.length !== arr2.length) return false

    //now we will initialize two object to to hold each frequency of array

    let obj1 = {}
    let obj2 = {}

    // now we will iterate overy arr1 and will get the value
    // we fill use for of loop for getting the value

    for(let val of arr1){
        obj1[val] = (obj1[val] || 0 ) + 1
        //if the obj1[val] exist so increase or not would be 0 and add 1 to it;
        // it will count how many frequency are there 
        // obj1[a] = (would be 0 because we dont the value) + 1
        // obj [a] = 1
        // a: 1 likewise for each element
    }
    // now will interate over arr2
    for(let val of arr2){
        obj2[val] = (obj2[val] || 0) +1
    }
    
    console.log(obj1, obj2)
    // checking what we get and what object would look like


    //              **    IMPORTANT    **

    //today i learn something new and very excited let me comment it down here so anyone in future what to learn
    //... or explore or maybe you already know..

    //  If you use the key directly with the in operator, it will check whether that specific key exists in the object.

    // Syntax     

    // "key" in object (This checks if the property name (key) exists in the object)

//       const obj = { a: 1, b: 2, c: 3 };

//       console.log("a" in obj); // true (because "a" exists in `obj`)
//       console.log("d" in obj); // false (because "d" does not exist in `obj`)



//  "If you use a variable instead of a hardcoded string, it will evaluate the value of the variable".

// const obj = { a: 1, b: 2, c: 3 };

// let key = "b";
// console.log(key in obj); // true (because "b" exists in `obj`)

// key = "d";
// console.log(key in obj); // false (because "d" does not exist in `obj`)


// " Using with Loop"
// const obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//   console.log(key in obj); // true for "a", "b", "c" since they all exist in `obj`
// }

// "Array"(it is also work for arrays if we need to find index if you find index and that index is not there so it will true false. you  must check length)
    
    for(let key in obj1){
        if(!(key ** 2  in obj2 )) return false
        
        if(obj2[key ** 2] !== obj1[key]) return false
    }

    return true


}

console.log(FrequencyCounter([1,2,3], [1,4,10]))