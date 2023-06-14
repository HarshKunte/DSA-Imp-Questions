function reverse() {
    var temp = null;
    var current = head;
  
            while (current != null) {
                temp = current.prev;
                current.prev = current.next;
                current.next = temp;
                current = current.prev;
            }
     
            if (temp != null) {
                head = temp.prev;
            }
        }