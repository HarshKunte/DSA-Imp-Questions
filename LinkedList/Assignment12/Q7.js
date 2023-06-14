
function mergeAlternate(head1, head2) {
    if (head1 === null) {
      return head2; 
    }
    if (head2 === null) {
      return head1; 
    }
  
    let current1 = head1;
    let current2 = head2;
  
    while (current1 !== null && current2 !== null) {
      let next1 = current1.next; 
      let next2 = current2.next; 
  
      current1.next = current2;
      current2.next = next1; 
  
      current1 = next1;
      current2 = next2;
    }
  
    return head1;
  }