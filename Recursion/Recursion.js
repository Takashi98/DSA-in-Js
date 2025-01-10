// find a factorial of number
// factorial : Factorial is a mathematical operation that multiplies a number by all the natural numbers that are smaller than it. It is represented by the number followed by an exclamation point. For example, 7! represents the factorial of 7, which is equal to 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of 0 is defined as 1.

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
}
  console.log(total);
  return total
}

// console.log(factorial(3));

// Now will write recursive function

function recursionFactorial(num){
     if(num === 1) return 1;
     return num * recursionFactorial(num-1)
}

console.log(recursionFactorial(5))
