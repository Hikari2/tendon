import { LOAD_LEVEL } from '../constants/actionTypes'
import MapLoader from '../utils/mapLoader'

const mapLoader = new MapLoader()

const initialState = {
  width: 0,
  height: 0,
  player: {
    x: 0,
    y: 0
  },
  enemies: {

  },
  objectives: {

  }
}

export default function map(state = initialState, action, game) {
  switch (action.type) {
    case LOAD_LEVEL: {
      return mapLoader.loadMap(game.level)
    }
    default:
      return state
  }
}
