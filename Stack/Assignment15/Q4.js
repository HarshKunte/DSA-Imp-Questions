function reverse(stack){
    if(stack.length!=0){
        let popped = stack.pop();
        reverse(stack);
        insertBottom(stack, popped)
    }
}
function insertBottom(stack, num){
    if(stack.length===0){
        stack.push(num)
    }
    else{
        let popped = stack.pop()
        insertBottom(stack, num)
        stack.push(popped)
    }
}
