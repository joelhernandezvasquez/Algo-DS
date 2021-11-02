

function removeDuplicates(nums){
  const uniqueValues = new Set(nums)
  return [...uniqueValues]
}

function removeDuplicates2(nums){
    const uniqueValues = {};

    nums.forEach(num => {
       if(!uniqueValues[num])  
          uniqueValues[num] = 1
    });
    
   const arr =  Object.keys(uniqueValues).map((value)=> parseInt(value))
   return arr;

}
const removeDuplicates3 = (nums)=>{
    nums = nums.sort();
    
    for(let i=0;i<nums.length;i++)
        {
            for(let j=i+1;j<nums.length;j++)
                {
                    if(nums[i] === nums[j])
                        {
                            delete nums[j];
                            
                        }
                }

        }
    return nums.sort();
}

const f = removeDuplicates2([0,0,1,1,1,2,2,3,3,4])
console.log(f);