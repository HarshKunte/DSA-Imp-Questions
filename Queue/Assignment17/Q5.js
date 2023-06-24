var findTheWinner = function(n, k) {
    let q = [];
    for(let i=1;i<=n;i++){
        q.push(i)
    }

    return play(q, k, 1)
};

function play(q, k, current){
    if(q.length===1) return q.shift();

    let player = q.shift();
    if(current===k){
        return play(q, k, 1)
    }
    else{
        q.push(player)
        return play(q, k, current+1)
    }
}