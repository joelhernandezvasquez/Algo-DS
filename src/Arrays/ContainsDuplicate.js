// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(){
    const duplicate = {};
    for(let num of nums){
        if(!duplicate[num]){
            duplicate[num] = 1
        }
        else{
            duplicate[num]++
        }
    }
    
    for(const[key,value] of Object.entries(duplicate))
        {
            if(value > 1){
                return true;
                break;
            }
        }
    
    return false;
}

