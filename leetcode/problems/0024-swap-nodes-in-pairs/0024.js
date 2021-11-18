/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 76 ms
 * Memory Usage: 38.9 MB
 */
 var swapPairs = function(head) {
  let dummy = new ListNode(0, head);
  let cur = dummy;
  
  while (cur.next != null && cur.next.next !== null) {
      const first = cur.next;
      const second = cur.next.next;
      
      first.next = second.next;
      second.next = first;
      cur.next = second;
      
      cur = cur.next.next;
  }
  
  return dummy.next;
};