
// You are given an array of two numbers [a,b]. Find the sum of those two numbers plus 
//the sum of all the numbers between them.

// (Note: The lower number may not always be the first element in the array)

function sum(arr){
    arr = arr.sort();
    const max = Math.max(...arr)
    const  min = Math.min(...arr)
    let total = 0;

    for(let i = min; i<=max;i++ )
    {
        total+=i
    }

  console.log(arr[0] + arr[1])
  return total;
}

const f = sum([1, 4])
console.log(f)