// Given an input string (str), remove all vowels from the string.



// Test Case

// function removeVowels (str) {



// }

// removeVowels('Hello World') - Returns Hll Wrld

function removeVowels(str)
{
    return str.replace(/[aeiou]/gi,"");
}



  
const fn = removeVowels('Hello World');
console.log(fn);