// // Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// // A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function getLastWord(s){
   s = s.trim();
   let lastWord = '';
   for(let i=s.length-1;i >=0;i--)
   {
        if(s[i] === ' ') break;  
       lastWord = lastWord.concat(s[i])
   }

   lastWord = lastWord.split('').reverse().join('');
   return lastWord.length;
  
}

const getLastWord2  = (s) =>{
s = s.trim().split('').reverse().join('');
 let lastWord = '';
  for(let character of s)
  {
      if(character === ' ') break;
      lastWord = lastWord.concat(character)
  }
   return lastWord.split('').reverse().join('').length;
  
}

function getLastWord3 (s) {
    let lenghtLastWord=0;
    s = s.trim().split('').reverse().join('');
    for(let character of s)
    {
        if(character === ' ') break;
        lenghtLastWord++
    }
    return lenghtLastWord;
}
const f = getLastWord3('   fly me   to   the moon  ');
console.log(f);
 