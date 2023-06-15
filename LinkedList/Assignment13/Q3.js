function reverseKNodes(head, k) {
    if (head === null || k <= 1) {
      return head;
    }
  
    let temp = new ListNode(0); 
    temp.next = head;
    let prev = temp;
    let current = head;
  
    while (current !== null) {
      let count = k;
      let tail = prev.next;
  
      
      while (count > 0 && tail !== null) {
        tail = tail.next;
        count--;
      }
  
      if (count > 0 || tail === null) {
        break;
      }
  
      let nextChunkHead = tail.next;
      let [newHead, newTail] = reverseList(prev.next, tail);
      prev.next = newHead;
      newTail.next = nextChunkHead;
  
      prev = newTail;
      current = nextChunkHead;
    }
  
    return temp.next;
  }
  
  function reverseList(head, tail) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null && current !== tail.next) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return [prev, head];
  }