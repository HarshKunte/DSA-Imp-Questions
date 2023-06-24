function countStudents(students, sandwiches) {
    const queue = []; 
  
    for (let i = 0; i < students.length; i++) {
      queue.push(students[i]);
    }
  
    let count = 0;
  
    while (count < queue.length) {
      if (queue[0] === sandwiches[0]) {
        queue.shift(); 
        sandwiches.shift(); 
        count = 0; 
      } else {

        queue.push(queue.shift());
        count++; 
  
        if (count === queue.length) {
          break;
        }
      }
    }
  
    return count;
  }
  