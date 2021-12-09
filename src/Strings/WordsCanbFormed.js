// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

var countCharacters = function(words, chars) {
 
    let counter = 0;
     chars = chars.split('').sort().join('');
     
     for(let word of words)
         {
            if(canBeFormed(word,chars))
                counter+=word.length;
         }
  
     
     return counter;
    
 };
 
 function canBeFormed(word,chars)
 {
     word = word.split('').sort().join('')
     let j = 0;
     console.log(word)
     console.log(chars)
     
     for(let i=0;i<chars.length;i++)
         {
            if(chars[i] === word[j]){
              j++;
                if(j === word.length) return true;
             }
         }
     return false;
     
 }