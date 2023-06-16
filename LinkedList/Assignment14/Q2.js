function addOne(head)
    {
        if(head.next===null){
            head.data = head.data+1;
            return head
        }
        
        let current = head, prev =null;
        
        ///reverse 
        while(current!=null){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp
        }
        
        head = prev;
        current = head;
        
        //add 1
        current.data = current.data+1;
        while(current.data>9){
            if(current.next===null){
                let newDigit = new Node(0)
                current.next = newDigit;
            }
            current.data = (current.data)%10
            current = current.next
            current.data = current.data+1
        }
        
        current = head;
        prev = null;
        
        //reverse again
        while(current!=null){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp
        }
        head = prev;
        
        return head
    }