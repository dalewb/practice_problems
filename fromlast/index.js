// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// Theirs
function fromLast(list, n) {
  let slow = lixt.getFirst();
  let fast = list.getFirst();

  while ( n > 0) {
    fast = fast.next;
    n--;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Mine
function fromLast(list, n) {
  let first = list.head
  let second = list.head

  for (i=0; i<n; i++) {
    first = first.next
  }

  while (first.next) {
    second = second.next
    first = first.next
  }
  return second
}

module.exports = fromLast;
