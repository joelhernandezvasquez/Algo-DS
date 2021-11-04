

function anagram(stringA,stringB)
{
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString (str)
{
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


const f = anagram('RAIL! SAFETY!', 'fairy tales')
console.log(f)