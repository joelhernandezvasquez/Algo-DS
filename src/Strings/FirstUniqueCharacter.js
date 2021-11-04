function FirstUniqueCharacter(s) {
    const characters = {};
    let index = -1;
    
     for(let char of s)
         {
             if(!characters[char]){
                 characters[char] = 1;
             }
             else{
                characters[char]++; 
             }
         }
    
    for(const[key,value] of Object.entries(characters))
        {
            if(value == 1)
                {
                    index = s.indexOf(key);
                    break;
                }
        }
    return index;
    
};


const f = FirstUniqueCharacter("loveleetcode")
console.log(f)