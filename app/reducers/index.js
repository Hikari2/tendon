import mapReducer from './map'
import playerReducer from './player'
import cameraReducer from './camera'

export default function(state = {}, action) {
  const map = mapReducer(state.map, action)
  const player = playerReducer(state.player, action)
  const camera = cameraReducer(state.camera, action, player, map)
  return {
    map,
    player,
    camera
  }
}
