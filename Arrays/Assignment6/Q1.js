var diStringMatch = function(s) {
    const n = s.length;
  const perm = [];
  let smallest = 0;
  let largest = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm.push(smallest);
      smallest++;
    } else {
      perm.push(largest);
      largest--;
    }
  }

  perm.push(smallest); 

  return perm;
};