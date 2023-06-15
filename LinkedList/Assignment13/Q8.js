function deleteNodeAtPosition(head, n) {
    if (n <= 0 || head === null) {
      return;
    }

    let current = head;
    let count = 1;

    while (current !== null && count < n) {
      current = current.next;
      count++;
    }

    if (current === null) {
      return;
    }

    if (current === head) {
      head = current.next;
      if (head !== null) {
        head.prev = null;
      }
    } else {
      current.prev.next = current.next;
      if (current.next !== null) {
        current.next.prev = current.prev;
      }
    }

    current.prev = null;
    current.next = null;
  }