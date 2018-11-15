// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

// Theirs
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  

}

module.exports = { Tree, Node };


// Mine
// class Node {
//   constructor(data) {
//     this.data = data
//     this.children = []
//   }
//
//   add(data) {
//     this.children.push(new Node(data))
//   }
//
//   remove(nodeToRemove) {
//     this.children = this.children.filter(node => node.data !== nodeToRemove)
//   }
// }

// Mine
// class Tree {
//   constructor() {
//     this.root = null
//   }
//
//   traverseBF(fn, node = this.root) {
//     if (node === this.root) {
//       fn(node)
//     }
//
//     if (node.children.length === 0) {
//       return
//     }
//
//     for (let i=0; i<node.children.length; i++) {
//       fn(node.children[i])
//     }
//
//     for (let j=0; j<node.children.length; j++) {
//       this.traverseBF(fn, node.children[j])
//     }
//   }
//
//   traverseDF(fn, root = this.root) {
//     fn(root)
//
//     for (let j=0; j<root.children.length; j++) {
//       this.traverseDF(fn, root.children[j])
//     }
//   }
//
// }
