
// // You're working on a secret team solving coded transmissions.

// // Your team is scrambling to decipher a recent message, 
//worried it's a plot to break into a major European National Cake Vault. 
//The message has been mostly deciphered, but all the words are backward! 
//Your colleagues have handed off the last step to you.

// // Write a function reverseWords() that takes a message 
// //as an array of characters and reverses the order of the words in place

// const message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains o
//only letters and spaces, and all words are separated by one space.

function reverseWordsInPlace(message)
{
  
  
 reverseCharacters(message,0,message.length - 1)

let currentStartIndex = 0
 for(let i=0;i<=message.length;i++)
 {
     if(i===message.length || message[i]===' ')
     {
         // reversing by chunk

         reverseCharacters(message, currentStartIndex,i-1)
         currentStartIndex = i + 1;
     }
 }

 return message


}

function reverseCharacters(message,leftIndex,rightIndex)
{
    let temp ="";
    while(leftIndex < rightIndex)
    {
        temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

function reverseWordsOutPlace(message)
{
  let messageReversed = [];
  let word = ""
  let startIndex = 0;
  let endIndex = 0;
  
 for(let i=0;i<=message.length;i++) {
     if(message[i] === ' ' || i === message.length)  
     {
         // take a chunk word
         messageReversed.push(word)
         word = "";
     }
     else{
         word+= message[i];
     }
  }
 endIndex = messageReversed.length - 1;
  while(startIndex < endIndex)
  {
     let temp = messageReversed[startIndex];
     messageReversed[startIndex] = messageReversed[endIndex]
     messageReversed[endIndex] = temp;
     startIndex++;
     endIndex--;
  }
  console.log(messageReversed)
 let string = ""
  for(let word of messageReversed)
  {
      string+= word + " "; 
  }
  return string.trimEnd().split('');


  
}

const fn = reverseWordsOutPlace([
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l"
  ])
  console.log(fn);