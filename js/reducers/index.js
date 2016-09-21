import { combineReducers } from 'redux'
import {MOVE_PLAER} from '../constants/actionTypes'
import {directions} from '../actions/index'
import {tileSize} from '../constants/gameConstants'

const initialState = {
  player: {
    x: 250,
    y: 100,
    direction: directions.NEUTRAL
  },
  camera: {
    offsetX: 0,
    offsetY: 0
  }
}

function getMovement (direction) {
  switch (direction) {
    case directions.TOP:
      return {
        dx: 0,
        dy: -tileSize
      }
    case directions.LEFT:
      return {
        dx: -tileSize,
        dy: 0
      }
      case directions.RIGHT:
        return {
          dx: tileSize,
          dy: 0
        }
      case directions.DOWN:
        return {
          dx: 0,
          dy: tileSize
        }
      default:
        return {
          dx: 0,
          dy: 0
        }
      }
    }

function player (state = initialState.player, action) {
  switch (action.type) {
    case MOVE_PLAER:
      return {
        x: state.x + getMovement(action.payload.direction).dx,
        y: state.y + getMovement(action.payload.direction).dy,
        direction: action.payload.direction
      }
    default:
      return state
  }
}

function camera (state = initialState.camera, action) {
  switch (action.type) {
    case MOVE_PLAER:
      return {
        offsetX: state.offsetX + getMovement(action.payload.direction).dx,
        offsetY: state.offsetY + getMovement(action.payload.direction).dy
      }
    default:
      return state
  }
}

const tendon = combineReducers({
  player,
  camera
})

export default tendon
