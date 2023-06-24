function canQueueSort(q1){
    let stack = [];
    let q2 = [];
    
    let currentNumber = 1;
    while(q1.length>0){
        let element = q1.shift();
        if(element==currentNumber) {
            q2.push(element)
            currentNumber++;
        }
        else stack.push(element)
        
        
    }
    if(stack.length===0) return "Yes";
    
    while(stack.length>0){
        let popped = stack.pop();
        if(popped===currentNumber) {
            q2.push(popped)
            currentNumber++
        }
        else return "No"
    }
    
    return "Yes"
}