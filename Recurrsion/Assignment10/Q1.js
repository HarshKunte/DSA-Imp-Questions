function calcPow3(n){
    if(n==1) return true
    
    if( n%3!==0 || n<=0) return false
    
    return calcPow3(n/3)
}