
   
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function pyramid(n){
   if(n < 1) return 0

   for(let i=1; i<=n;i++)
   {
         let print = '' 
       for(let j=0;j<n;j++)
       {
         if(j<i)
         {
           print+='#'  
         } 
         else{
            print+='';
         }
       }
       console.log(print);      
    
   }
}
pyramid(10);