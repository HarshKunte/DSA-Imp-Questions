function retainAndDelete(head, M, N) {
    if (head === null || M <= 0 || N <= 0) {
      return head;
    }
  
    let currentNode = head;
    let temp = null;
  
    while (currentNode !== null) {
      for (let i = 0; i < M && currentNode !== null; i++) {
        temp = currentNode;
        currentNode = currentNode.next;
      }
  
      for (let i = 0; i < N && currentNode !== null; i++) {
        currentNode = currentNode.next;
      }
  
      temp.next = currentNode;
    }
  
    return head;
  }