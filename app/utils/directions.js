import { PLAYER_SPEED, TILE_SIZE } from '../constants/gameConstants'

const directions = {
  DOWN: 0,
  LEFT: 1,
  TOP: 2,
  RIGHT: 3,
  NEUTRAL: -10
}

export function getDirection(x, y, cx, cy) {

  x = (x - cx)
  y = (y - cy)

  let v = Math.atan2(y, x) * (180 / Math.PI)
  if (v < 0) {
    v += 360
  }
  let direction
  if (v >= 45 && v <= 135) {
    direction = directions.DOWN
  } else if (v > 135 && v <= 225) {
    direction = directions.LEFT
  } else if (v > 225 && v <= 315) {
    direction = directions.TOP
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

  export function getDestination (direction, x, y) {
    switch (direction) {
      case directions.TOP:
        return {
          x,
          y: y -TILE_SIZE
        }
      case directions.LEFT:
        return {
          x: x -TILE_SIZE,
          y
        }
        case directions.RIGHT:
          return {
            x: x + TILE_SIZE,
            y
          }
        case directions.DOWN:
          return {
            x,
            y: y + TILE_SIZE
          }
        default:
          return {
            x,
            y
          }
      }
    }

  export default directions
