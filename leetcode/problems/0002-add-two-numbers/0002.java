import leetcode.lib.ListNode;
/**
 * Runtime: 6 ms
 * Memory Usage: 45 MB
 */
class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
  
    ListNode cur1 = l1;
    ListNode cur2 = l2;
    ListNode cur = dummy;
    int carry = 0;
    
    while (cur1 != null || cur2 != null) {
      int val1 = 0;
      int val2 = 0;
      if (cur1 != null) {
        val1 = cur1.val;
      }
      if (cur2 != null) {
        val2 = cur2.val;
      }

      int sum = val1 + val2 + carry;

      ListNode tmp = new ListNode(sum % 10);
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      cur.next = tmp;
      cur = cur.next;

      if (cur1 != null) {
        cur1 = cur1.next;
      }

      if (cur2 != null) {
        cur2 = cur2.next;
      }
    }
    
    if (carry > 0) {
      cur.next = new ListNode(carry);
    }
  
    return dummy.next;
  }
}