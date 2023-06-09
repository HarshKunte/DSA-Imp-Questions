function power(n, p){
    if(p==0) return 1
    if(p%2==0){
    let res = power(n, p/2)
    return res * res}
    else{
        let res = power(n, (p-1)/2)
        return n * res * res
    }
}