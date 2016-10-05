import { LOAD_LEVEL } from '../constants/actionTypes'
import MapLoader from '../utils/mapLoader'
import { TILE_SIZE } from '../constants/gameConstants'

const mapLoader = new MapLoader()

const initialState = {
  tileSize: TILE_SIZE,
  background: [],
  foreground: [],
  height: 0,
  width: 0,
  player: {
    x: 0,
    y: 0
  }
}

export default function map(state = initialState, action, game) {
  switch (action.type) {
    case LOAD_LEVEL: {
      return Object.assign({}, state, mapLoader.loadMap(game.level))
    }
    default:
      return state
  }
}
