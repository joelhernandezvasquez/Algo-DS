/* Based on the list, create a function that returns an object that shows the number of times element exists in the array.  For example, 
* {
*  "apple": 2,
*  "toddler": 1,
*  "point": 1,
*  "blue": 3,
*  "red": 1,
*  "yellow": 1
* }
*/ 

const list = ['apple', 'apple', 'toddler', 'point', 'blue', 'blue', 'red', 'yellow', 'blue'];

function getObject (arr){
    let items = {};

    arr.forEach(element =>{
        if(!items[element]){
            items[element] = 1
        }
        else{
            items[element] += 1
        }
    })

    return items;
}

const f = getObject(list)
console.log(f);