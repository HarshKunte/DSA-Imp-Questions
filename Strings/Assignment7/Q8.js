var checkStraightLine = function(coordinates) {
    const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    const [xPrev, yPrev] = coordinates[i - 1];

    if ((yi - yPrev) * (x1 - x0) !== (xi - xPrev) * (y1 - y0)) {
      return false;
    }
  }
  return true;
};