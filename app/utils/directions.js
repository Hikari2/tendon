import { PLAYER_SPEED } from '../constants/gameConstants'

const directions = {
  TOP: 'top',
  LEFT: 'left',
  RIGHT: 'right',
  DOWN: 'down',
  NEUTRAL: 'neutral'
}

export function getDirection(x, y, cx, cy) {
  x = x - cx
  y = cy - y
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

export function getMovement (direction) {
  switch (direction) {
    case directions.TOP:
      return {
        dx: 0,
        dy: -PLAYER_SPEED
      }
    case directions.LEFT:
      return {
        dx: -PLAYER_SPEED,
        dy: 0
      }
      case directions.RIGHT:
        return {
          dx: PLAYER_SPEED,
          dy: 0
        }
      case directions.DOWN:
        return {
          dx: 0,
          dy: PLAYER_SPEED
        }
      default:
        return {
          dx: 0,
          dy: 0
        }
    }
  }

  export default directions
