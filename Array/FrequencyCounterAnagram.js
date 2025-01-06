// ANAGRAM : given two strings, write a function to determine if the second stirng is anagram of first 
// example : 'cinema' formed from 'iceman'

function Anagram(str1, str2){
    //checking if the length of str1 is equal to str2 if not return false if they have same length go ahead 
    if(str1.length !== str2.length) return false
    
    let obj1 = {}
    let obj2 = {}

    for(let char of str1){
        obj1[char] = (obj1[char] || 0) + 1
    }
    for(let char of str2){
        obj2[char] = (obj2[char] || 0) + 1
    }
    
    console.log(obj1, obj2)

    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false
    
    for(let key in obj1){
        if(!(key in obj2)) return false
        if(obj1[key] !== obj2[key]) return false
    }

    return true
    
}


console.log(Anagram("aap", 'pah'))