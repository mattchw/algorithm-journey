/**
 * Runtime: 185 ms
 * Memory Usage: 43.9 MB
 */
 var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);
  
  let cur1 = l1;
  let cur2 = l2;
  let cur = dummy;
  let carry = 0;
  
  while (cur1 !== null || cur2 !== null) {
      let val1 = cur1 !== null ? cur1.val : 0;
      let val2 = cur2 !== null ? cur2.val : 0;
      
      let sum = val1 + val2 + carry;
      
      let newNode = new ListNode(sum % 10);
      carry = sum >= 10 ? 1 : 0;
      cur.next = newNode;
      cur = cur.next;

      if (cur1 !== null) {
      cur1 = cur1.next;
      }

      if (cur2 !== null) {
      cur2 = cur2.next;
      }
  }
  
  if (carry > 0) {
      cur.next = new ListNode(carry);
  }

  return dummy.next;
};