/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

var reorderList = function (head) {
  if (!head) {
    return null;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let left = head;
  let right = reverse(slow.next);
  slow.next = null;

  while (right) {
    let next = right.next;
    right.next = left.next;
    left.next = right;
    left = right.next;
    right = next;
  }

  return head;
};

function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}