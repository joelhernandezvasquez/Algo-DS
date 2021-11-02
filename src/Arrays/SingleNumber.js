// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums) {
    const singleNumber = {};
    
    for(let num of nums)
        {
            if(!singleNumber[num])
                {
                    singleNumber[num] = 1
                }
            else{
                singleNumber[num]++
            }
        }
    for(const[key,value] of Object.entries(singleNumber))
        {
           if(value === 1)
               return parseInt(key)
        }
};
 