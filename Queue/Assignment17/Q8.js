var DataStream = function(value, k) {
    this.stream = []
    this.value = value;
    this.k = k;
};

DataStream.prototype.consec = function(num) {
     this.stream.push(num);

    if (this.stream.length < this.k) {
      return false;
    }

    if (this.stream.length > this.k) {
      this.stream.shift();
    }

    for (let i = 0; i < this.k; i++) {
      if (this.stream[i] !== this.value) {
        return false;
      }
    }

    return true;
};