// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

}

module.exports = fib;

// MINE (RECURSIVE)
// 1141.79999 milliseconds for fib(40)

// function fib(n) {
//   if (n === 0) {
//     return 0
//   } else if (n <= 2) {
//     return 1
//   }
//
//   return fib(n-1) + fib (n-2)
// }

// MINE (CALCULATE ENTIRE ARRAY)
// .099999 millisecods for fibArray(40)

// function fibArray(n) {
//   let result = [0,1,1]
//   index = 0
//
//   if (n === 0) {
//     return [0]
//   } else if (n === 1) {
//     return [0,1]
//   } else if (n === 2) {
//     return result
//   }
//
//   for (let i=2; i<n; i++) {
//     result.push(result[i-1] + result[i])
//   }
//
//   return result[result.length - 1]
// }

// MINE (NO ARRAY)
// .2000 milliseconds for fib2(40)

// function fib2(n) {
//   let index = 3
//   let prevNum = 1
//   let currentNum = 2
//
//   if (n === 0) {
//     return 0
//   } else if (n <= 2) {
//     return 1
//   }
//
//   while (index < n) {
//     let temp = currentNum
//     currentNum = (currentNum + prevNum)
//     prevNum = temp
//     index++
//   }
//
//   return currentNum
// }

// CHECK TIME
// let t0 = performance.now()
// fibArray(40)
// let t1 = performance.now()
// console.log("Time: ", (t1 - t0))
