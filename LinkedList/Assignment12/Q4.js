function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true; 
    }
  
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    let prev = null;
    let curr = slow;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf !== null) {
      if (firstHalf.val !== secondHalf.val) {
        return false; 
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true;
  }