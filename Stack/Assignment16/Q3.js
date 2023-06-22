function deleteMiddle(stack, current, size){
    if(stack.length==0 || current===size) return;
    
    let popped = stack.pop()
    deleteMiddle(stack, current+1, size)
    if(current!==Math.floor(size/2)){
        stack.push(popped)
    }
    
}