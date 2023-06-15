function deleteLast(head, x)
{
    let temp = head;
    let prev = null;
     while (temp != null)
     {
         if (temp.data == x)
            prev = temp;
        temp = temp.next;
     }
       
     if (prev != null && prev.next == null)
     {
         temp = head;
        while (temp.next != prev)
        {
            temp = temp.next;
        }
        temp.next = null;
     }
       
     if (prev != null && prev.next != null)
     {
         prev.data = prev.next.data;
        temp = prev.next;
        prev.next = prev.next.next;
          
     }
     return head;
      
}