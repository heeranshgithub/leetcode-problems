// 206. Reverse Linked List EASY
// Given the head of a singly linked list, reverse the list,
// and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (head === null) return null

    let prev = null
    let curr = head
    let next = null

    while(curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};