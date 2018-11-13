// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record)
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record
  }
}

module.exports = Queue;

// MINE
//
// class Queue {
//   constructor() {
//   this.stackOne = new Stack
//     this.stackTwo = new Stack
//   }
//
//   switchStack(s1, s2) {
//     let currentPop = s1.pop()
//     while (currentPop) {
//       s2.push(currentPop)
//       currentPop = s1.pop()
//     }
//   }
//
//   add(record) {
//     this.stackOne.push(record)
//   }
//
//   remove() {
//     this.switchStack(this.stackOne, this.stackTwo)
//     let popped = this.stackTwo.pop()
//     this.switchStack(this.stackTwo, this.stackOne)
//     return popped
//   }
//
//   peek() {
//     this.switchStack(this.stackOne, this.stackTwo)
//     let peeked = this.stackTwo.peek()
//     this.switchStack(this.stackTwo, this.stackOne)
//     return peeked
//   }
// }

// THEIRS
//
// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }
//
//   add(record) {
//     this.first.push(record)
//   }
//
//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }
//
//     const record = this.second.pop();
//
//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }
//
//     return record
//   }
//
//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }
//
//     const record = this.second.peek();
//
//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }
//
//     return record
//   }
// }
