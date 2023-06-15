function reverseAlternateKNodes(head, k) {
    if (head === null || k <= 1) {
      return head;
    }
  
    let current = head;
    let prev = null;
    let count = 0;
  
    // Reverse the first k nodes
    while (current !== null && count < k) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
      count++;
    }
  
    count = 0;
    while (current !== null && count < k) {
      current = current.next;
      count++;
    }
  
    if (current !== null) {
      head.next = reverseAlternateKNodes(current, k);
    }
  
    return prev;
  }