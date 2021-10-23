
// Given an integer, return an integer that is reverse ordering of numbers.
// EXAMPLES
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(integer) {
 
   if(integer === 0) return 0;
   
   let integerReverse ='';
  integerReverse = integer.toString().split('').reverse().join('');
 
  if(integerReverse.indexOf('0')>=0){
    integerReverse = integerReverse.replaceAll('0','');
      
  }
  if(integer < 0)
      {
        integerReverse = ['-',...integerReverse].join('')
      }
  return parseInt(integerReverse);

}

function reverseInt2 (integer)
{
   const integerReversed = integer.toString().split('').reverse().join('');
   return parseInt(integerReversed) * Math.sign(integer);
}
const f = reverseInt2(-500)


console.log(f);



