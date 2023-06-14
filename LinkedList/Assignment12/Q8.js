function isCircular( head) {
    if (head == null)
        return true;

     let temp = head.next;

    while (temp != null && temp != head)
    temp = temp.next;
    return (temp == head);
}