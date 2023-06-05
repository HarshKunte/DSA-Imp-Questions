function nonRepeatingChar(str){
    let map = new Map()
    for(let ch of str){
        let occured = map.get(ch)
        occured ? map.set(ch, occured+1) : map.set(ch, 1)
    }
    
    for(let ch of map){
        if(ch[1]===1) return str.indexOf(ch[0])
    }
    
    return -1
}