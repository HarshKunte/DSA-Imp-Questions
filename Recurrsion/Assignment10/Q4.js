function subStr(str, l, r){
    let mid = (Math.floor((r-l)/2))+l
    if(l===r){
        return 1
    }
    return subStr(str, l, mid) + subStr(str, mid+1, r)

}

function getSubStr(str){
    return subStr(str,0,str.length-1)
}