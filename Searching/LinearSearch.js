//A linear search, also known as a sequential search, is a simple algorithm for finding an item in a list by checking each element one by one until a match is found


function linearSearch(array, val) {
    // checking if the have elements or not,if not return false right away
  if (array.length === 0) return false;
    // loop over the entire array and check on each index have the value given by user 
  for (let i = 0; i < array.length; i++) {
    // checking the value 
    if (array[i] === val) {
        // if yes return index right, or you can return value as well
        // returning the value doent make any sense so, im returng index here
      return i;
    }
  }
  // if we didnt find return false or -1 //
  return -1;
}
// The time complexity of linear search is O(n), where n is the number of elements in the list. This means that the running time of linear search increases linearly with the size of the list. 
console.log(linearSearch([2, 3, 4, 5, 6], 6));

