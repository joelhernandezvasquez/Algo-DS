// Fibonacci Sequence
// Give a number n, find the first n elements of the fibonacci seriies.

// Now what is fibonacci series? Well it is a series of numbers in which each number ( Fibonacci number ) 
// is the sum of the two preceding numbers.
// The first two numbers in the series are 0 and 1.
// Test Case

// function printFibonacci(n) {
// }

// printFibonacci(2) - Returns 0 1

// printFibonacci(7) - Returns 0 1 1 2 3 5 8

function fibonacci (num)
{
  if(num < 2)
  {
      return num
  }

  return fibonacci(num-1) + fibonacci(num-2)
}

function printFibonacci(num)
{
   for(let i=0;i<num;i++){
      console.log(fibonacci(i))
   }
}


const f = printFibonacci(7)
console.log(f);