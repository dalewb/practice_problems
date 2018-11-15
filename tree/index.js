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

  traverseBF(fn, node = this.root, root = this.root) {
    if (node === root) {
      fn(root)
    }

    for (let i=0; i<node.children.length; i++) {
      fn(node.children[i])
    }

    if (node.children.length > 0) {
      for (let j=0; j<root.children.length; j++) {
        this.traverseBF(fn, root.children[j], this.root)
      }
    }
  }

  traverseDF(fn, root = this.root) {
    fn(root)

    for (let j=0; j<root.children.length; j++) {
      this.traverseDF(fn, root.children[j])
    }
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
