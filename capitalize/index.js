// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = ''

  str.split('').forEach((char, index) => {
    if (str[index-1] === " " || index === 0) {
      result += char.toUpperCase()
    } else {
      result += char
    }
  })

  return result
}

module.exports = capitalize;

// BETTER SOLUTION (MINE):

// function capitalize(str) {
//   let words = str.split(' ')
//   let capitalized = []
//
//   words.map(word => {
//     capitalized.push(word[0].toUpperCase() + word.slice(1))
//   })
//
//   return capitalized.join(' ')
// }
