import { MOVE_PLAER } from '../constants/actionTypes'
import { GAME_LEVELS } from '../constants/gameConstants'

const initialState = {
  level: GAME_LEVELS.ONE
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case MOVE_PLAER: {
      return state
    }
    default:
      return state
  }
}
