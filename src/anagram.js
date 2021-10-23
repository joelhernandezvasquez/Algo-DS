// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  if (stringA.length !== stringB.length) {
    return false
  }

  const hashMapA = mapCharacters(stringA)
  const hashMapB = mapCharacters(stringB)

  for (const [key, value] of Object.entries(hashMapA)) {
    if (!hashMapB[key] || hashMapB[key] == !value) {
      return false;
    }
  }

  return true
}

function mapCharacters (str) {
  const map = {}

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char]++
    }
  }
  return map;
}

const f = anagrams('RAIL! SAFETY!', 'fairy tales')
console.log(f)
