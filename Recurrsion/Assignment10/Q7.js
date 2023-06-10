function subStr(str,curr, visited){
    
    if(curr.length===str.length){
        console.log(curr+" ")
        return
    }
    

    for(let i=0;i<str.length;i++){
        if(visited[i]===true) 
            continue
            
        visited[i]=true
        subStr(str, curr+str[i], visited)
        visited[i]=false
    }
    
}

function getSubStr(str){
    let visited = new Array(str.length).fill(false)
    subStr(str, '', visited)
}