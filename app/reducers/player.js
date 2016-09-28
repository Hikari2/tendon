import { MOVE_PLAER,
  TURN_PLAYER,
  STOP_PLAYER,
  UPDATE
} from '../constants/actionTypes'

import directions, { getDirection, getMovement} from '../utils/directions'

import { PLAYER_SPEED, TILE_SIZE, ENTITY_TYPE, STATE_TYPE } from '../constants/gameConstants'

import SpriteLoader from '../utils/spriteLoader'

const spriteLoader = new SpriteLoader(ENTITY_TYPE.PLAYER, '')

const initialState = {
  x: 50,
  y: 50,
  moving: false,
  direction: {
    x: null,
    y: null
  },
  nextDirection: {
    x: null,
    y: null
  },
  animation: {
    frame: 1,
    sprite: null
  }
}

export default function player(state = initialState, action) {
  switch (action.type) {
    case MOVE_PLAER: {
      const {x, y} = action.payload.angle
      if (!state.moving) {
        return Object.assign({}, state, {
          direction: {
            x,
            y
          }
        })
      } else {
        return Object.assign({}, state, {
          nextDirection: {
            x,
            y
          }
        })
      }
    }
    case TURN_PLAYER: {
      const {dx, dy} = action.payload
      const x = state.x + dx
      const y = state.y + dy

      if (!state.moving) {
        return Object.assign({}, state, {
          direction: {
            x,
            y
          }
        })
      } else {
        return Object.assign({}, state, {
          nextDirection: {
            x,
            y
          }
        })
      }
    }
    case STOP_PLAYER: {
      if (!state.moving) {
        return state
      } else {
        return Object.assign({}, state, {
          nextDirection: {
            x: null,
            y: null
          }
        })
      }
    }
    case UPDATE: {
      if (!state.moving) {
        if (state.direction.x === null || state.direction.y === null) {
          const direction = getDirection(state.direction.x, state.direction.y, state.x, state.y)
          const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, 2, direction)
          return Object.assign({}, state, {
            animation: {
              frame: 1,
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
    const direction = getDirection(state.direction.x, state.direction.y, state.x, state.y)
    const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, 1, direction)
    return Object.assign({}, state, {
      moving: true,
      animation: {
        frame: 0,
        sprite
      }
    })
  }

  function continueMovement(state) {
    const direction = getDirection(state.direction.x, state.direction.y, state.x, state.y)
    const {dx, dy} = getMovement(direction)
    const sprite = spriteLoader.getSprite(STATE_TYPE.MOVING, state.animation.frame, direction)
    const framePerTile = TILE_SIZE / PLAYER_SPEED
    const finished = state.animation.frame === framePerTile
    return Object.assign({}, state, {
      x: finished ? state.x : state.x + dx,
      y: finished ? state.y : state.y + dy,
      moving: finished ? false : true,
      direction: finished ? state.nextDirection : state.direction,
      nextDirection: finished ? {x: null, y: null} : state.nextDirection,
      animation: {
        frame: finished ? 1 : state.animation.frame + 1,
        sprite
      }
    })
  }
}
