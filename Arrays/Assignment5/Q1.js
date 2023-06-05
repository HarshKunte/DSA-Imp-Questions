var construct2DArray = function(original, m, n) {
    const len = original.length;
  if (m * n !== len) {
    return [];
  }

  const res = [];
  for (let i = 0; i < len; i += n) {
    res.push(original.slice(i, i + n));
  }

  return res;
};