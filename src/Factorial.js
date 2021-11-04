// Factorial of a Number
// Give an integer (num), find the factorial of that integer.

// If the integer is represented as num, the factorial of num is the product of all positive integers less 
// than or equal to num.

// Example

// Factorial of 4 = 4 * 3 * 2 * 1

// Factorial of 4 = 24

function factorial(num)
{
    let factorial = 1;

    for(let i= num-1; i > 0;i--)
    {
        factorial += factorial * i
     }

  return factorial;
}

function factorialRecursive(num)
{

    if(num ===0 || num ===1)
    return 1

    return  num * factorialRecursive(num -1)
}



const f = factorialRecursive(5)
console.log(f)