import appReducer from './app'
import mapReducer from './map'
import playerReducer from './player'
import cameraReducer from './camera'

export default function(state = {}, action) {
  const app = appReducer(state.app, action)
  const map = mapReducer(state.map, action, app)
  const player = playerReducer(state.player, action, map)
  const camera = cameraReducer(state.camera, action, player, map)
  return {
    app,
    map,
    player,
    camera
  }
}
