// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// function reverseInt(n) {
//   if (n < 0) {
//     let intToString = (n * -1).toString().split('').reverse().join('')
//     return parseInt(intToString) * -1
//   } else {
//     let intToString = (n).toString().split('').reverse().join('')
//     return parseInt(intToString)
//   }
// }

// function reverseInt(n) {
//   const reversedInt = parseInt(n.toString().split('').reverse().join(''))
//
//   if (n < 0) {
//     return reversedInt * -1
//   }
//   return reversedInt
// }

// function reverseInt(n) {
//   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
// }

// function reverseInt(n) {
//   let reversed = n.toString().split('').reverse().join('')
//   return parseInt(reversed) * Math.sign(n)
// }
