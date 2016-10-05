import { MOVE_PLAER,
  TURN_PLAYER,
  STOP_PLAYER,
  UPDATE,
  LOAD_LEVEL
} from '../constants/actionTypes'
import directions, { getDirection, getMovement} from '../utils/directions'
import { PLAYER_SPEED, TILE_SIZE } from '../constants/gameConstants'

export default function player(state, action, map) {
  if (typeof state === 'undefined') {
    return {
      x: 0,
      y: 0,
      moving: false,
      frame: 0,
      direction: directions.NEUTRAL,
      nextDirection: directions.NEUTRAL,
      facing: directions.DOWN
    }
  }

  switch (action.type) {
    case LOAD_LEVEL: {
      return Object.assign({}, state, {
        x: map.player.x * map.tileSize,
        y: map.player.y * map.tileSize
      })
    }

    case MOVE_PLAER: {
      let {x, y} = action.payload.angle
      const direction = getDirection(x, y, state.x, state.y)
      if (!state.moving) {
        return Object.assign({}, state, {
          direction,
          nextDirection: direction
        })
      } else {
        return Object.assign({}, state, {
          nextDirection: direction
        })
      }
    }
    case TURN_PLAYER: {
      const {dx, dy} = action.payload
      const x = state.x + dx
      const y = state.y + dy
      const direction = getDirection(x, y, state.x, state.y)
      return Object.assign({}, state, {
        nextDirection: direction
      })
    }
    case STOP_PLAYER: {
      if (!state.moving) {
        return state
      } else {
        return Object.assign({}, state, {
          nextDirection: directions.NEUTRAL
        })
      }
    }
    case UPDATE: {
      if (state.direction === directions.NEUTRAL) {
        return Object.assign({}, state, {
          moving: false
        })
      }
      else if (!state.moving) {
        return startMovement(state)
      } else {
        return continueMovement(state)
      }
  }
  default: {
    return state
  }
}

  function startMovement(state) {
    return Object.assign({}, state, {
      moving: true,
      facing: state.direction
    })
  }

  function continueMovement(state) {
    const {dx, dy} = getMovement(state.direction)
    const framePerTile = TILE_SIZE / PLAYER_SPEED
    const finished = state.frame === framePerTile
    return Object.assign({}, state, {
      x: finished ? state.x : state.x + dx,
      y: finished ? state.y : state.y + dy,
      frame: finished ? 0 : state.frame + 1,
      direction: finished ? state.nextDirection : state.direction,
      nextDirection: state.nextDirection,
      facing: finished ?
      (state.nextDirection === directions.NEUTRAL ?
        state.facing : state.nextDirection) : state.facing
    })
  }
}
