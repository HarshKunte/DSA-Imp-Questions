function sortStack(stack){
    let temp = []
    
    while(stack.length>0){
        let popped = stack.pop()
        if(popped >= temp[temp.length-1] || temp.length===0){
            temp.push(popped)
        }
        else{
            while(temp.length>0 && temp[temp.length-1]>popped){
                stack.push(temp.pop())
            }
            temp.push(popped)
        }
    }
    
    return temp
}