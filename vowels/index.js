// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

module.exports = vowels;

// MINE (ITERATIVE)
// function vowels(str) {
//   const letters = str.split('')
//   const vowels = 'aeiou'
//   let count = 0
//
//   letters.forEach(letter => {
//     if (vowels.includes(letter.toLowerCase())) {
//       count += 1
//     }
//   })
//   return count
// }
