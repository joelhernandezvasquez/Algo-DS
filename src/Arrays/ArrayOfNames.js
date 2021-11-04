// Given an array (names) of objects where each object contains 
//the firstname and lastname of a person, return an array that contains 
//the fullname of each person.



// Test Case

// function fullNames(names) {

   

// }

// Input: names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]

// fullNames(names) - Returns ['Bruce Wayne', 'Clark Kent']

function getArrayNames(name)
{
   return name.map((element)=> `${element.firstname} ${element.lastname}`)
   
}

const fn = getArrayNames([{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}])
console.log(fn);