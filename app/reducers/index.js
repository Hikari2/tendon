import appReducer from './app'
import worldReducer from './world'
import cameraReducer from './camera'

export default function(state = {}, action) {
  const app = appReducer(state.app, action)
  const world = worldReducer(state.world, action, app)
  const camera = cameraReducer(state.camera, action, world)
  return {
    app,
    world,
    camera
  }
}
