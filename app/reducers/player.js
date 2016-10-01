import { MOVE_PLAER,
  TURN_PLAYER,
  STOP_PLAYER,
  UPDATE,
  LOAD_LEVEL
} from '../constants/actionTypes'
import directions, { getDirection, getMovement} from '../utils/directions'
import { PLAYER_SPEED, TILE_SIZE, ENTITY_TYPE, STATE_TYPE } from '../constants/gameConstants'
import SpriteLoader from '../utils/spriteLoader'

const spriteLoader = new SpriteLoader(ENTITY_TYPE.PLAYER, '')

export default function player(state, action, map) {
  if (typeof state === 'undefined') {
    return {
      x: map.player.x,
      y: map.player.y,
      moving: false,
      direction: directions.NEUTRAL,
      nextDirection: directions.NEUTRAL,
      height: TILE_SIZE,
      width: TILE_SIZE,
      animation: {
        frame: 1,
        facing: directions.DOWN,
        sprite: null
      }
    }
  }

  switch (action.type) {
    case LOAD_LEVEL: {
      return Object.assign({}, state, {
        x: map.player.x,
        y: map.player.y
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
      if (!state.moving) {
        if (state.direction === directions.NEUTRAL) {
          const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, 2, state.animation.facing)
          return Object.assign({}, state, {
            animation: {
              frame: 1,
              facing: state.animation.facing,
              sprite
            }
          })
        } else {
          return startMovement(state)
        }
      } else {
        return continueMovement(state)
      }
  }
  default: {
    return state
  }
}

  function startMovement(state) {
    const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, 1, state.direction)
    return Object.assign({}, state, {
      moving: true,
      animation: {
        frame: 0,
        facing: state.direction,
        sprite
      }
    })
  }

  function continueMovement(state) {
    const {dx, dy} = getMovement(state.direction)
    const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, state.animation.frame, state.direction)
    const framePerTile = TILE_SIZE / PLAYER_SPEED
    const finished = state.animation.frame === framePerTile
    return Object.assign({}, state, {
      x: finished ? state.x : state.x + dx,
      y: finished ? state.y : state.y + dy,
      moving: finished ? false : true,
      direction: finished ? state.nextDirection : state.direction,
      nextDirection: state.nextDirection,
      animation: {
        frame: finished ? 1 : state.animation.frame + 1,
        facing: state.animation.facing,
        sprite
      }
    })
  }
}
