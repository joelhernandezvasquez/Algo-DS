// Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

// Test Case

// function printPrime (min, max) {

// }

// printPrime(0, 20) - Returns 2 3 5 7 11 13 17 19

function prime(n){
   if(n===1) return false;
   if(n===2) return true;
   
    return n%2!==0
}

function printPrime(min,max){

    for(let i = min; i <=max;i++)
    {
        if(prime(i)){
            console.log(i)
        }
    }

}

const f = printPrime(0,20);
console.log(f)

