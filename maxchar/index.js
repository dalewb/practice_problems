// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  counterObj = {}
  maxChar = ''
  counter = 0

  for (let char of str) {
    if(counterObj[char]) {
      counterObj[char]++
    } else {
      counterObj[char] = 1
    }
  }

  
}

module.exports = maxChar;

// function maxChar(str) {
//   let counterObj = {}
//   let chars = str.split('')
//   maxChar = ''
//   counter = 0
//
//   chars.map(char => {
//     counterObj[char] = (counterObj[char] + 1) || 1
//   })
//
//   for(let char in counterObj) {
//     if (counterObj[char] > counter) {
//       counter = counterObj[char]
//       maxChar = char
//     }
//   }
//
//   return maxChar
// }
