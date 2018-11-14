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

// Theirs
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

// Theirs
  // clear() {
  //   this.head = null;
  // }

  removeFirst() {
    this.head = this.head.next
  }

// Theirs
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
// Mine
  // insertLast(data) {
  //   if (!this.head) {
  //     this.head = new Node(data)
  //     return
  //   }
  //   let node = this.head
  //   while (node.next) {
  //     node = node.next
  //   }
  //   node.next = new Node(data)
  // }
// Mine (second)
  // insertLast(data) {
  //   if (!this.head) {
  //     this.head = new Node(data)
  //   }
  //   let node = this.getLast()
  //   if (node) {
  //     node.next = new Node(data)
  //   }
  // }

// Theirs
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

// Mine
  // getAt(index, nodeToGet) {
  //   let count = 0
  //   let node = this.head
  //   while (count !== index && node) {
  //     count++
  //     node = node.next
  //   }
  //   return node
  // }

// Mine (second)
  // getAt(index) {
  //   if (!this.head) {
  //     return
  //   }
  //   let count = 0
  //   let node = this.head
  //   while (node) {
  //     if (count === index) {
  //       return node
  //     }
  //     count++
  //     node = node.next
  //   }
  //   return node
  // }

// Theirs
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    return null
  }

// Mine
  // removeAt(index) {
  //   if (!this.head) {
  //     return
  //   }
  //   if (index === 0) {
  //     this.head = this.head.next
  //   }
  //   let count = 0
  //   let node = this.head
  //   let prevNode = null
  //   while (node && index !== count) {
  //     count++
  //     prevNode = node
  //     node = node.next
  //   }
  //
  //   prevNode.next = prevNode.next.next
  // }

// Mine (second)
  // removeAt(index) {
  //   if (!this.head) {
  //     return
  //   } else if (index === 0 && this.head.next) {
  //     this.head = this.head.next
  //     return
  //   } else if (index === 0) {
  //     this.head = null
  //     return
  //   }
  //   let node = this.head;
  //   let prevNode = null
  //   let count = 0;
  //   while (node) {
  //     if (count === index) {
  //       prevNode.next = node.next
  //       return
  //     }
  //     count++
  //     prevNode = node
  //     node = node.next
  //   }
  // }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (previous.next) {
      previous.next = previous.next.next
      return
    }
    return null
  }

}

module.exports = { Node, LinkedList };
