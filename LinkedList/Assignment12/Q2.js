function hasCycle(head) {
    if (!head || !head.next) {
      return false; // Empty list or single node list
    }
  
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; // Loop detected
      }
    }
  
    return false; // No loop found
  }