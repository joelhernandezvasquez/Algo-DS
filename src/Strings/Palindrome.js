

const isPalindrome = (str) => {
  let palindrome = str.split('').reverse().join('');
  return str === palindrome;
}

function isPalindrome2(str)
{
    let palindrome ='';

    for(let character of str)
    {
        palindrome = character + palindrome;
    }
     return str === palindrome;
}

function isPalindrome3(str)
{
  let tempStr = (str.replaceAll(',','').replaceAll(':','').replaceAll(' ',"")).split("").map(character => character.toLowerCase()).join('')
 let palindrome = tempStr.split('').reverse().join('');
  return tempStr === palindrome

}


const result = isPalindrome3('A man, a plan, a canal: Panama');
console.log(result);