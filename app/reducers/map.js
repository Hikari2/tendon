import { MOVE_PLAER } from '../constants/actionTypes'

const initialState = {
  w: 50,
  h: 100
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
