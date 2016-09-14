
export function getDirection (x, y) {
  let v = Math.atan2(y, x) * (180 / Math.PI);
  if (v < 0) {
    v += 360;
  }
  let direction;
  if (45 <= v && v <= 135) {
    direction = 'TOP';
  } else if (135 < v && v <= 225) {
    direction = 'LEFT';
  } else if (225 < v && v <= 315) {
    direction = 'DOWN';
  } else {
    direction = 'RIGHT';
  }
  return direction;
}
