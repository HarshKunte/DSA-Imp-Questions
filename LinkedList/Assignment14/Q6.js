
function leftShiftLinkedList(head, k) {
    if (!head || k <= 0) {
        return head; // No need to shift if the list is empty or k is invalid
      }
    
      let length = 0;
      let current = head;
      while (current) {
        length++;
        current = current.next;
      }
    
      k = k % length; // Adjust k to handle cases where k > length
    
      if (k === 0) {
        return head; // No need to shift if k is a multiple of the length
      }
    
      let prev = null;
      let tail = head;
    
      // Traverse to the end of the list
      while (tail.next) {
        prev = tail;
        tail = tail.next;
      }
    
      // Connect the tail to the head
      tail.next = head;
    
      // Find the new head and new tail after left-shifting
      for (let i = 0; i < length - k+1; i++) {
        prev = prev.next;
      }
      const newHead = prev.next;
      prev.next = null; 
    
      return newHead;
    }