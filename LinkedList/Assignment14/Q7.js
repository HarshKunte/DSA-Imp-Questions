function nextGreaterNodes(head) {
    if (!head) {
      return [];
    }
  
    const stack = [];
    const result = [];
    let index = 0;
  
    while (head) {
      result[index] = 0; 

      while (stack.length > 0 && head.val > stack[stack.length - 1].val) {
        const prevNode = stack.pop();
        result[prevNode.index] = head.val;
      }

      stack.push({ val: head.val, index });
  
      head = head.next;
      index++;
    }
  
    return result;
  }