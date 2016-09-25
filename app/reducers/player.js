import { MOVE_PLAER,
  TURN_PLAYER,
  UPDATE
} from '../constants/actionTypes'

import directions, { getDirection,
  getMovement
} from '../utils/directions'

import { PLAYER_SPEED, TILE_SIZE, ENTITY_TYPE, STATE_TYPE } from '../constants/gameConstants'

import SpriteLoader from '../utils/spriteLoader'

const initialState = {
  x: 50,
  y: 50,
  direction: directions.NEUTRAL,
  nextDirection: directions.NEUTRAL,
  moving: false,
  sprite: {
    frame: 1,
    facing: directions.DOWN,
    path: ''
  }
}

const spriteLoader = new SpriteLoader(ENTITY_TYPE.PLAYER, '')

export default function player(state = initialState, action) {
  switch (action.type) {
    case MOVE_PLAER: {
      const {x, y} = action.payload.angle
      const offset = TILE_SIZE / 2
      const direction = getDirection(x, y, state.x - offset, state.y - offset)
      if (!state.moving) {
        return Object.assign({}, state, {
          direction
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

      if (!state.moving) {
        return Object.assign({}, state, {
          direction
        })
      } else {
        return Object.assign({}, state, {
          nextDirection: direction
        })
      }
    }
    case UPDATE: {
      if (state.direction === directions.NEUTRAL) {
        const path = spriteLoader.getSprite(STATE_TYPE.MOVING, 1, state.sprite.facing)
        return Object.assign({}, state, {
          sprite: {
            frame: 1,
            facing: state.sprite.facing,
            path
          }
        })
      } else if (!state.moving) {
        return startMovement(state)
      } else {
        return continueMovement(state)
      }
    }
    default:
      return state
  }

  function startMovement(state) {
    const {dx, dy} = getMovement(state.direction)
    const path = spriteLoader.getSprite(STATE_TYPE.MOVING, state.sprite.frame, state.sprite.facing)
    return Object.assign({}, state, {
      x: state.x + dx,
      y: state.y + dy,
      moving: true,
      sprite: {
        frame: 1,
        facing: state.direction,
        path
      }
    })
  }

  function continueMovement(state) {
    const {dx, dy} = getMovement(state.direction)
    const framePerTile = TILE_SIZE / PLAYER_SPEED
    const path = spriteLoader.getSprite(STATE_TYPE.MOVING, state.sprite.frame, state.direction)
    const finished = state.sprite.frame === framePerTile
    return Object.assign({}, state, {
      x: finished ? state.x : state.x + dx,
      y: finished ? state.y : state.y + dy,
      moving: finished ? false : true,
      direction: finished ? directions.NEUTRAL : state.direction,
      sprite: {
        frame: finished ? 1 : state.sprite.frame + 1,
        facing: state.direction,
        path
      }
    })
  }
}
