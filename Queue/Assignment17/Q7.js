var FrontMiddleBackQueue = function() {
    this.q = []
};

FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.q.unshift(val)
};


FrontMiddleBackQueue.prototype.pushMiddle = function(val) {

    let middle = Math.floor(this.q.length / 2);
    this.q.splice(middle, 0, val)
};


FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.q.push(val)
};


FrontMiddleBackQueue.prototype.popFront = function() {
    if(!this.q.length) return -1
    return this.q.shift()
};


FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(!this.q.length) return -1;

    let n = this.q.length
    let mid = Math.floor(n/2)
    for(let i=0; i<mid;i++){
        this.q.push(this.q.shift())
    }
    let popped = this.q.shift();
    for(let i=0; i<n-mid;i++){
        this.q.push(this.q.shift())
    }

    return popped
};


FrontMiddleBackQueue.prototype.popBack = function() {
    if (!this.q.length) return -1;
    return this.q.pop()
};
