import {MOVE_PLAER,
  TURN_PLAYER,
  STOP_PLAYER,
  UPDATE
} from '../constants/actionTypes'

export function movePlayer(angle) {
  return {
    type: MOVE_PLAER,
    payload: {
      angle
    }
  }
}

export function turnPlayer(dx, dy) {
  return {
    type: TURN_PLAYER,
    payload: {
      dx,
      dy
    }
  }
}

export function stopPlayer() {
  return {
    type: STOP_PLAYER,
    payload: {
    }
  }
}

export function update() {
  return {
    type: UPDATE,
    payload: {
    }
  }
}
