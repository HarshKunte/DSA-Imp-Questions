function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transpose = Array(cols)
      .fill(null)
      .map(() => Array(rows));
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        transpose[col][row] = matrix[row][col];
      }
    }
  
    return transpose;
  }
  