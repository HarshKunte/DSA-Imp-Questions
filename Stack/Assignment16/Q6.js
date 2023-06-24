function reverseKElement(q, k){
    if (q.length == 0 || k > q.length)
         return;
     if (k <= 0)
         return;
    let stack = [];
    let n = q.length;
    for(let i=1; i<=k;i++){
        stack.push(q.shift())
    }
    for(let i=1; i<=k;i++){
        q.push(stack.pop())
    }
    for(let i=1; i<=n-k;i++){
        q.push(q.shift())
    }
    
    return q
 }