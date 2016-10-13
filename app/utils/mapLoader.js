import levelOne from '../levels/one'
import { GAME_LEVELS } from '../constants/gameConstants'

export default class MapLoader {
  constructor() {

  }

  loadMap(level) {
    switch(level) {
      case GAME_LEVELS.ONE: {
        return levelOne
      }
      default: {
        return levelOne
      }
    }
  }
}
