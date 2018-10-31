// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibArray(n) {
  let result = [0,1,1]
  index = 0

  if (n === 0) {
    return [0]
  } else if (n === 1) {
    return [0,1]
  } else if (n === 2) {
    return result
  }

  for (let i=2; i<n; i++) {
    result.push(result[i-1] + result[i])
  }

  return result[result.length - 1]
}

module.exports = fib;

// MINE (RECURSIVE)
// function fib(n) {
//   if (n === 0) {
//     return 0
//   } else if (n <= 2) {
//     return 1
//   }
//
//   return fib(n-1) + fib (n-2)
// }
