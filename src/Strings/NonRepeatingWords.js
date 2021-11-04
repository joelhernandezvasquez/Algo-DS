function noRepeatWords(str1,str2)
{

  let arr1 = str1.split(" ");
  let arr2 = str2.split(" ");
  let arrWords = [];
  let words = {};

  for(let word of arr1)
  {
      if(!words[word]){
          words[word] = 1;
      }
      else{
          words[word]++
      }
  }

  for(let word of arr2)
  {
      if(!words[word]){
          words[word] = 1;
      }
      else{
          words[word]++
      }
  }

  for(const [key,value] of Object.entries(words))
  {
    if(value === 1)
     arrWords.push(key);
  }
   return arrWords

}


const fn = noRepeatWords('Hello Hello', 'Welcome Vishwas');
console.log(fn);