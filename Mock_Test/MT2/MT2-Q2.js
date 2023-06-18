var addTwoNumbers = function(l1, l2) {
    if(l1 === null || l2 === null)  return null;

    let carry=0;
    let resHead = new ListNode(0)
    let resDigit = resHead;
    while(l1!==null || l2!==null){
        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        resDigit.val = sum % 10;

        if(sum>9){ 
            carry = 1;
        }
        else{
            carry = 0;
        }

        if((l1 && l1.next!==null) || (l2 && l2.next!==null)){
            resDigit.next = new ListNode(0)
            resDigit = resDigit.next
        }

        l1 = l1? l1.next : l1;
        l2 = l2? l2.next : l2;

    }

    if(carry!==0){
        resDigit.next = new ListNode(carry)
        resDigit = resDigit.next
    }

    return resHead
};