//Write a code to find two strings are similar

function compareString (str1,str2)
{
    return str1 === str2;
}

function compareString2(str1,str2)
{
    if(str1.length !== str2.length) return false;
   
    let strHash1 = hashMap(str1);
   let strHash2 = hashMap(str2);

   for( const[key,value] of Object.entries(strHash1))
   {
       if(key !==strHash2[key])
       {
         return false;
       }
   }
   return true;


}

function hashMap (str)
{
    const hash = {}

    for(let char of str.split(''))
    {
        hash[char] = char
    }
    return hash;
}



const fn = compareString2("hello","hello")
console.log(fn);