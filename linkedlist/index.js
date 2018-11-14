// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next
      count++
    }
    return count
  }

  getFirst() {
    return this.head
  }

// Start Here, the next few methods are my attempts.  Tests work.
  getLast() {
    let currentNode = this.head;
    let prevNode = null
    while (currentNode) {
      prevNode = currentNode
      currentNode = currentNode.next
    }
    return prevNode
  }

// THEIRS
  // getLast() {
  //   if (!this.head) {
  //     return null
  //   }
  //
  //   let node = this.head
  //   while (node) {
  //     if (!node.next) {
  //       return node
  //     }
  //     node = node.next
  //   }
  // }

// My second attempt
  clear() {
    this.head = null
  }

  // clear() {
  //   let currentNode = this.head;
  //   let temp = null
  //   while (currentNode) {
  //     temp = currentNode
  //     currentNode = currentNode.next
  //     temp.next = null
  //   }
  //   this.head = null
  // }

// My second attempt
  // clear() {
  //   this.head = null
  // }

// THEIRS
  // clear() {
  //   this.head = null;
  // }

  removeFirst() {
    this.head = this.head.next
  }

// THEIRS
  // removeFirst() {
  //   if (!this.head) {
  //     return;
  //   }
  //
  //   this.head = this.head.next;
  // }

// Mine
  // removeLast() {
  //   if (this.size() <= 1) {
  //     this.clear()
  //   } else {
  //     let currentNode = this.head
  //     let prevNode = null
  //     while (currentNode.next) {
  //       prevNode = currentNode
  //       currentNode = currentNode.next
  //     }
  //     prevNode.next = null
  //   }
  // }

// Theirs
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let node
  }
}

module.exports = { Node, LinkedList };
