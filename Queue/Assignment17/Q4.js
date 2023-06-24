var RecentCounter = function() {
    this.count =0;
    this.req = []
};

RecentCounter.prototype.ping = function(t) {
    this.req.push(t);
    this.count++;


    while(this.req[0]<t-3000){
       this.req.shift()
       this.count--;
    }

    return this.count
};