function calc(arr){
    let stack = []
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]==="*" || arr[i]==="+" || arr[i]==="-" || arr[i]==="/"){
            let res;
            let op1 = stack.pop()
            let op2 = stack.pop()
            console.log(op1, op2)
            if(arr[i]==="*") res = op2 * op1;
            if(arr[i]==="+") res = op2 + op1;
            if(arr[i]==="-") res = op2 - op1;
            if(arr[i]==="/") res = op2 / op1;
            stack.push(res)
        }
        else{
            stack.push(Number(arr[i]))
        }
    }
    
    return stack.pop()
}