function getNthFromEnd(head, n) {
    let first = head;
    let second = head;
  
    for (let i = 0; i < n; i++) {
      if (first === null) {
        return null; // Invalid value of N
      }
      first = first.next;
    }
  
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    return second ? second.val : null;
  }