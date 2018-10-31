// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  letters = str.split('')
  j = letters.length - 1

  for(i=0; i < (letters.length/2); i++) {
    if (letters[i] !== letters[j]) {
      return false
    }
    j--
  }
  return true
}

module.exports = palindrome;

// NOTES
// For an efficient palindrome checker, you only need to check the first half of the string against the
// last half

// function palindrome(str) {
//   const reversed = str.split('').reduce((string, letter) => {
//     return letter + string
//   })
//
//   if (str === reversed) {
//     return true
//   }
//   return false
// }

// function palindrome(str) {
//   return str.split('').reverse().join('') === str
// }

// function palindrome(str) {
//   letters = str.split('')
//   j = letters.length - 1
//
//   for(i=0; i < (letters.length/2); i++) {
//     if (letters[i] !== letters[j]) {
//       return false
//     }
//     j--
//   }
//   return true
// }
