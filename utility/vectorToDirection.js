
export function getDirection (x, y) {
  let v = Math.atan2(y, x) * (180 / Math.PI)
  if (v < 0) {
    v += 360
  }
  let direction
  if (v >= 45 && v <= 135) {
    direction = 'TOP'
  } else if (v > 135 && v <= 225) {
    direction = 'LEFT'
  } else if (v > 225 && v <= 315) {
    direction = 'DOWN'
  } else {
    direction = 'RIGHT'
  }
  return direction
}
