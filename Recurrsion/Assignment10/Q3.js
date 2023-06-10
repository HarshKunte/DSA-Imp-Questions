function subStr(str, curr, index, res){
    let n = str.length
    if(index==n){
        res.push(curr)
        return
    }
    subStr(str, curr+str[index], index+1, res)
    subStr(str, curr, index+1, res)
    return res
}

function getSubStr(str){
    return subStr(str, "", 0, [])
}