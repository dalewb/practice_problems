// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVE SOLUTION
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  steps(n, row, stair)
}
module.exports = steps;

// MY ORIGINAL SOLUTION
// function stepMaker(n, char) {
//   let step = ""
//   for (i=1; i<=n; i++) {
//     step += char
//   }
//   return step
// }
//
// function steps(n) {
//   let hashes = stepMaker(n, "#")
//   let spaces = stepMaker(n, " ")
//   let result = ""
//
//   for (i=1; i<=n; i++) {
//     result = hashes.slice(n-i) + spaces.slice(i, n)
//     console.log(result)
//   }
// }


// function steps(n) {
//   for (i=0; i<n; i++) {
//     let stair = ""
//     for (j=0; j<n; j++) {
//       if (j > i) {
//         stair += " "
//       } else {
//         stair += "#"
//       }
//     }
//     console.log(stair);
//     stair = ""
//   }
// }
