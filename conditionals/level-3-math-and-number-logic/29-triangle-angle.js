// #29 - Given two angles of a triangle, calculate the third angle.
function findThirdAngleOfTriangle(a, b) {
  if (a <= 0 || b <= 0 || a + b >= 180) {
    return "Invalid triangle angles";
  }
  return 180 - a - b;
}
