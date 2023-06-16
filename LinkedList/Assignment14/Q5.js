function oddEvenList(head) {
    if (!head || !head.next) {
      return head; 
    }
  
    let oddHead = head;
    let evenHead = head.next;
    let oddTail = oddHead; 
    let evenTail = evenHead; 
    let current = evenHead.next; 
  
    let index = 3; 
    while (current) {
      if (index % 2 === 1) {
        // Odd index
        oddTail.next = current;
        oddTail = current;
      } else {
        // Even index
        evenTail.next = current;
        evenTail = current;
      }
  
      current = current.next;
      index++;
    }
  
    oddTail.next = evenHead;
    evenTail.next = null; 
  
    return oddHead;
  }