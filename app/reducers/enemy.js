import { UPDATE, LOAD_LEVEL } from '../constants/actionTypes'
import directions, { getDirection, getMovement, getDestination} from '../utils/directions'
import { TILE_SIZE } from '../constants/gameConstants'

export default function enemy(state, action) {
  switch (action.type) {
    case LOAD_LEVEL: {
      return Object.assign({}, state, {
        x: state.x * TILE_SIZE,
        y: state.y * TILE_SIZE,
        moving: false,
        blocked: false,
        destX: state.x * TILE_SIZE,
        destY: state.y * TILE_SIZE,
        alive: true,
        direction: directions.DOWN,
        nextDirection: directions.DOWN
      })
    }
    case UPDATE: {
      if (state.direction === directions.NEUTRAL) {
        return wait()
      }

      if (state.alive) {
        if (!state.moving) {
          return startMove()
        } else {
          return move()
        }
      }

      break
    }
    default: {
      return state
    }
  }

  function wait() {
    return Object.assign({}, state, {
      moving: false
    })
  }

  function startMove() {
    const {x, y} = getDestination(state.direction, state.x, state.y)
    return Object.assign({}, state, {
      moving: true,
      destX: x,
      destY: y
    })
  }

  function move() {
    if (state.blocked) {
      const {x, y} = getDestination(state.nextDirection, state.x, state.y)
      return Object.assign({}, state, {
        x: state.x,
        y: state.y,
        destX: x,
        destY: y,
        direction: state.nextDirection
      })
    }
    let {dx, dy} = getMovement(state.direction)
    const finished = (state.x + dx) === state.destX && (state.y + dy) === state.destY
    let newDest = {}
    if (finished) {
      const {x, y} = getDestination(state.nextDirection, state.x + dx, state.y + dy)
      newDest = {
        destX: x,
        destY: y
      }
    }
    return Object.assign({}, state, {
      x: state.x + dx,
      y: state.y + dy,
      direction: finished ? state.nextDirection : state.direction,
      facing: finished ?
      (state.nextDirection === directions.NEUTRAL ?
        state.facing : state.nextDirection) : state.direction
    }, newDest)
  }

  function getNextDirection(direction) {
    return (direction + 1) % 3
  }
}
