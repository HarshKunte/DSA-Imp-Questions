function firstNonRepeating(str){
    let s = str.split("")
    let q = []
    for(let i=0;i<s.length;i++){
        if(s[q[0]] === s[i]){
            while(s[q[0]] === s[i] && q.length>0){
                q.shift();
            }
        }
        else q.push(i)
    }
    
    if(q.length===0) return -1;
    return q.shift()
 }