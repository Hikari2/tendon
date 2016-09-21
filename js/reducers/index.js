import { combineReducers } from 'redux'
import {MOVE_PLAER} from '../constants/actionTypes'
import {directions} from '../actions/index'
import {tileSize} from '../constants/gameConstants'

const initialState = {
  x: 100,
  y: 100,
  direction: directions.NEUTRAL
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


function player (state = initialState, action) {
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

const tendon = combineReducers({
  player
})

export default tendon
