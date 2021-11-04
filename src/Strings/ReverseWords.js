

//Given an input string (str), reverse the string word by word.

// Note: 

// 1. Your reversed string should not contain leading or trailing spaces

// 2. You need to reduce multiple spaces between two words to a single space in the reversed string.



// Test Case

// function reverseWords (str) {



// }

// reverseWords('Hello World') - Returns 'World Hello'

// reverseWords(' This is  a  test string ') - Returns 'string test a is This'

function reverseWords(str)
{
    return str.trim().split(/\s+/).reverse().join(' ');
}