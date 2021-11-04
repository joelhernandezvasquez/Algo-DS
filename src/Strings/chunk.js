// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// first we need to iterate through the array

function chunkArrays (arr,chunkSize)
{
    
   const chunked = [];

    for(let element of arr)
    { 
       console.log(` this is element ${element}`)
       
        const last = chunked[chunked.length - 1];
        console.log(`this is last: ${last}`)

      if(!last || last.length === chunkSize)
      {
          chunked.push([element])
          console.log(`this is chunked ${chunked}`)
      }
      else{
          last.push(element)
      }
    };

    return chunked;
}

function chunk2 (arr,size)
{
    const chunked = [];
    let index = 0;

    while(index < arr.length)
    {
        chunked.push(arr.slice(index,size))
        index = size;
        size = size * size;
        
    }
    return chunked


}

const f = chunk2([1, 2, 3, 4, 5], 10);
console.log(f);





