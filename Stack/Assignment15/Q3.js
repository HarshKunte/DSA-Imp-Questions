class MyStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(x) {
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
  
      this.queue1.push(x);
  
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
    }
  
    pop() {
      return this.queue1.shift();
    }
  
    top() {
      return this.queue1[0];
    }
  
    empty() {
      return this.queue1.length === 0;
    }
  }

  