var findMinArrowShots = function(points) {
    points.sort((a,b)=> a[0]-b[0])
    let c=1;
    console.log(points)
    let n = points.length;
    let ms = points[0][0];
    let me = points[0][1];

    let i=1;
    while(i<n){

        while(ms<=me && i<n){
            ms = Math.max(ms, points[i][0])
            me = Math.min(me, points[i][1])
            if(ms>me) break;
            i++;
        }

        if(ms>me && i<n){
            ms = points[i][0];
            me = points[i][1];
            
        }
        
        if(i<n) c++;

        i++;
    }
    return c
};