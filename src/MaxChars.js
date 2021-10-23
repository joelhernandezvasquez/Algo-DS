//  Given a String, return the character that is the most
//  commonly used in the String.

//  EXAMPLES
//  maxChar('abcccccccd')
//  maxChar('apple 1231111')

// {a: 1, b: 1, c: 7, d: 1}
// a: 1
// b: 1
// c: 7
// d: 1

function maxChar (s) {
  s = s.trim()
  let maxCharObj = {}
  let mostRepeatedChar = null
  let greatestValue = 0

  for (let character of s) {
    if (!maxCharObj[character]) {
      maxCharObj[character] = 1
    } else {
      maxCharObj[character] += 1
    }
  }

  for (const [key, value] of Object.entries(maxCharObj)) {
    if (value > greatestValue) {
      greatestValue = value
      mostRepeatedChar = key
    }
  }

  return mostRepeatedChar;
}

const maxChar2 = str => {
  let charMap = {}
  let greatestValue = 0
  let mostRepeatedChar = ''

  for (let character of str) {
    if (!charMap[character]) {
      charMap[character] = 1
    } else {
      charMap[character]++
    }
  }

  for (let char in charMap) {
    if (charMap[char] > greatestValue) {
      greatestValue = charMap[char]
      mostRepeatedChar = char
    }
  }

  return mostRepeatedChar
}
const f = maxChar2('apple 1231111')
console.log(f)
