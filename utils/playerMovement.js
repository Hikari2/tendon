
export function getDirection (x, y, origin) {
  if (x === null || y === null) {
    return 'NEUTRAL';
  }
  x = x - origin.x
  y = origin.y - y
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

export function getMovement (direction) {
  let movement = {
    dx: 0,
    dy: 0
  }
  switch (direction) {
    case 'LEFT':
      movement.dx = -25
      break
    case 'TOP':
      movement.dy = -25
      break
    case 'DOWN':
      movement.dy = 25
      break
    case 'RIGHT':
      movement.dx = 25
      break
  }
  return movement
}
