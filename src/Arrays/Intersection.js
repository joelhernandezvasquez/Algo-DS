function intersection(nums1,nums2)
{ 
  // if there are duplicates


  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)];
  
    // if there is no duplicate
  
    const intersectionArray = nums1.filter((num)=> nums2.indexOf(num) !==-1)
  return intersectionArray;
}

const f = intersection([1, 2, 3,3,3],[2,3,3,4])
console.log(f)