// 2130. Maximum Twin Sum of a Linked List MEDIUM
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as
// the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are
// the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let node5 = new ListNode(5)
let node4 = new ListNode(4)
let node2 = new ListNode(2)
let node1 = new ListNode(1)
let node3 = new ListNode(3)
let node8 = new ListNode(8)

node5.next = node4
node4.next = node3
node3.next = node8
node8.next = node2
node2.next = node1

/**
 * @param {ListNode} head
 * @return {number}
 */
// 5 -> 4 -> 3 -> 8 -> 2 -> 1  => 5 <- 4 <- 3  8 -> 2 -> 1
// 5 -> 4 -> 3 -> 1
var pairSum = function (head) {
  if (!head.next.next) return head.val + head.next.val

  let slow = head //using slow and fast pointers to find the first node of the second half of the list
  let fast = head

  while (fast !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // so now slow is the first node in the second half of the list

  //reversing first half of linkedList
  // 1   <-   2  ->  3  ->  4  ->  5
  //         p      c,n
  let prev = null
  let curr = head
  let next = null

  while (curr !== slow) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }
  //prev becomes the head of the first half list (which has been reversed)

  //after the reversal of the fist half, now will traverse through both lists by adding nodes at same indexes in both the list, to find the maxSum
  let max = 0
  while (prev !== null) {
    max = Math.max(prev.val + slow.val, max)
    prev = prev.next
    slow = slow.next
  }

  return max
}

console.log(pairSum(node5))
