var tree2str = function(root) {
    if (!root) {
    return '';
  }

  const stack = [root];
  const visited = new Set();
  let result = '';

   while (stack.length > 0) {
    const node = stack[stack.length - 1];
    if (visited.has(node)) {
      stack.pop();
      result += ')';
    } else {
      visited.add(node);
      result += `(${node.val}`;
      if (!node.left && node.right) {
        result += '()';
      }

      if (node.right) {
        stack.push(node.right);
      }

      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return result.substring(1, result.length - 1);

};