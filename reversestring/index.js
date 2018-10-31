// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let strArray = str.split('')
//   let result = ''
//
//   for(let letter of str) {
//     result = letter + result
//   }
//
//   return result
// }

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed
//   }, '')
// }

// everyThird = (arr) => {
//   let result = [];
//
//   for (i = 0; i < arr.length; i += 3) {
//     result.push(arr[i])
//   }
//
//   return result
// }

// let doubled = arr.reduce((acc, num) => {
//   acc.push(num * 2)
//   return acc
// }, [])
