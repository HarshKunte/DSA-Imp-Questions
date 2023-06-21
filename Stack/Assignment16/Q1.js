function greaterFreq(arr){
    let max= arr[0];
    for(let num of arr){
        max = Math.max(num, max)
    }
    
    let freq = new Array(max+1).fill(0)
    for(let num of arr){
        freq[num]++
    }
    
    let stack = [];
    let res = new Array(arr.length).fill(0)
    stack.push(0)
    for(let i=1; i< arr.length;i++){
        if(freq[arr[stack[stack.length-1]]] > freq[arr[i]]){
            stack.push(i)
        }
        else{
            while(freq[arr[stack[stack.length-1]]]<freq[arr[i]] && stack.length>0  ){
                res[stack[stack.length-1]] = arr[i]
                stack.pop()
            }
            stack.push(i)
        }
        
    }
    
    while(stack.length>0){
        let index = stack.pop()
        res[index] = -1
    }
    
    return res
}