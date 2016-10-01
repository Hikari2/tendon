import levelOne from '../levels/1'
import { TILE_SIZE, GAME_LEVELS, ENTITY_TYPE } from '../constants/gameConstants'

export default class MapLoader {
  constructor() {
    this.player = {}
    this.enemies = {}
  }

  loadMap(level) {
    this.player = {}
    this.enemies = {}
    let map
    switch(level) {
      case GAME_LEVELS.ONE: {
        map = levelOne
        break
      }
      default: {
        map = levelOne
      }
    }
    return this.read(map)
  }

  read(map) {
    this.readTileMap(map.tileMap, map.symbolMap)
    return {
      width: map.width * TILE_SIZE,
      height: map.height * TILE_SIZE,
      player: this.player
    }
  }

  readTileMap(tileMap, symbolMap) {

    tileMap.forEach((data, row) => {
      const tiles = data.split(' ')
      tiles.forEach((tile, col) => {
        const data = symbolMap[tile]
        this.convertToEntity(data, col, row)
      }, [row])
    })
  }

  convertToEntity(data, x, y) {
    switch(data.type) {
      case ENTITY_TYPE.PLAYER: {
        Object.assign(this.player, this.player, {
          x: x * TILE_SIZE,
          y: y * TILE_SIZE
        })
      }
    }
  }
}
