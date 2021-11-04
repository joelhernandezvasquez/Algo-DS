// Longest Word in a String
// Given a string (str), find the longest word in the string.

// Note: If one more more words have the same length, 
//return the first occuring word of the same length.



// Test Case

// function longestWord (str) {



// }

// longestWord('My name is Vishwas') - Returns 'Vishwas'

// longestWord('Hello world') - Returns 'Hello'

function longestWord(str)
{

    let greatest = 0;
    let longWord = ""

    for(let char of str.split(' '))
    {
        if(char.length > greatest)
         {
             greatest = char.length;
             longWord = char;
         }
    
    }

    return longWord


}

const fn = longestWord('Hello World')
console.log(fn)