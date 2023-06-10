function subStr(str, start, end){
    let n = str.length
    if(end===n){
        start++;
        end=start
    }
    if(end===n){
        return 0
    }
    if(str[start]===str[end]){
        return 1+ subStr(str, start, end+1)
    }
    else{
        return subStr(str, start, end+1)
    }
}

function getSubStr(str){
    return subStr(str, 0, 0)
}