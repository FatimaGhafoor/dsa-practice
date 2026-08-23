// #26 - Take coordinates (x, y) and determine which quadrant the point lies in.
function findQuadrant(x, y) {
  if (x === 0 && y === 0) return "Origin";
  if (x === 0) return "Y-axis";
  if (y === 0) return "X-axis";

  if (x > 0 && y > 0) return "Quadrant 1";
  if (x < 0 && y > 0) return "Quadrant 2";
  if (x < 0 && y < 0) return "Quadrant 3";
  if (x > 0 && y < 0) return "Quadrant 4";
}
