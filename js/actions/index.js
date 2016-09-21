import {MOVE_PLAER} from '../constants/actionTypes'

export const directions = {
  TOP: 'TOP',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  NEUTRAL: 'NEUTRAL'
}

const getDirection = (x, y, origin) => {
  if (x === -1 || y === -1) {
    return directions.NEUTRAL
  }
  x = x - origin.x
  y = origin.y - y
  let v = Math.atan2(y, x) * (180 / Math.PI)
  if (v < 0) {
    v += 360
  }
  let direction
  if (v >= 45 && v <= 135) {
    direction = directions.TOP
  } else if (v > 135 && v <= 225) {
    direction = directions.LEFT
  } else if (v > 225 && v <= 315) {
    direction = directions.DOWN
  } else {
    direction = directions.RIGHT
  }
  return direction
}

export function movePlayer(x, y, origin) {
  let direction = getDirection(x, y, origin)
  return {
    type: MOVE_PLAER,
    payload: {
      direction
    }
  }
}
