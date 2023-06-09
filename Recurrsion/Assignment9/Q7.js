function calcString(S) {
    const result = [];
    const visited = Array(S.length).fill(false);
  
    function backtrack(currentPermutation) {
      if (currentPermutation.length === S.length) {
        result.push(currentPermutation); 
        return;
      }
  
      for (let i = 0; i < S.length; i++) {
        if (visited[i]) {
          continue; 
        }
  
        visited[i] = true;
        backtrack(currentPermutation + S[i]); 
        visited[i] = false; 
      }
    }
  
    backtrack('');
  
    return result;
  }