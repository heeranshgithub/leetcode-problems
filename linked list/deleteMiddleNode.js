// 2095. Delete the Middle Node of a Linked List MEDIUM
// You are given the head of a linked list. Delete the middle node, and
// return the head of the modified linked list.
// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the
// start using 0-based indexing, where ⌊x⌋ denotes the largest
// integer less than or equal to x.
// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let node1 = new ListNode(1)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node7 = new ListNode(7)
let nodeSecond1 = new ListNode(1)
let node2 = new ListNode(2)
let node6 = new ListNode(6)

node1.next = node3
node3.next = node4
node4.next = node7
node7.next = nodeSecond1
nodeSecond1.next = node2
node2.next = node6

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let listLength = 0
  let tmp = head

  while (tmp !== null) {
    listLength++
    tmp = tmp.next
  }

  console.log("listLength: ", listLength)

  if (listLength === 1) return null

  let deleteNodeNum = listLength / 2 //(7)
  console.log("deleteNodeNum: ", deleteNodeNum)
  let index = 0
  tmp = head
  while (tmp !== null) {
    if (index + 1 === deleteNodeNum) {
      tmp.next = tmp.next.next
      return head
    }
    tmp = tmp.next
    index++
  }

  return head
}

console.log(deleteMiddle(node1))
