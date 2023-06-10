function checkVowels(str){
    function recurCheck(str, start){
        if(start==str.length){
            return 0
        }
        
        if(str[start]!=='a' && str[start]!=='e' && str[start]!=='i' &&
            str[start]!=='o' && str[start]!=='u'){
                return 1 + recurCheck(str, start+1)
        }
        else{
                return recurCheck(str, start+1)
        }
        
    }
    
    return recurCheck(str, 0)
}
