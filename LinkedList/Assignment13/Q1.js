function createNewList(list1, list2) {
    if (list1 === null) {
      return list2; 
    }
    if (list2 === null) {
      return list1; 
    }
  
    let head = null; 
    let tail = null; 
  
    let current1 = list1;
    let current2 = list2;
  
    while (current1 !== null && current2 !== null) {
      let newNode = null;
  
      if (current1.val >= current2.val) {
        newNode = new ListNode(current1.val);
        current1 = current1.next;
      } else {
        newNode = new ListNode(current2.val);
        current2 = current2.next;
      }
  
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
  
    if (current1 !== null) {
      tail.next = current1; 
    }
  
    if (current2 !== null) {
      tail.next = current2; 
    }
  
    return head;
  }