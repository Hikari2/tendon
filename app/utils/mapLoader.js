import levelOne from '../levels/1'
import { TILE_SIZE, GAME_LEVELS, ENTITY_TYPE, TILE_TYPE } from '../constants/gameConstants'

export default class MapLoader {
  constructor() {
    this.walls = []
  }

  loadMap(level) {
    this.walls = []
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
      tileSize: TILE_SIZE,
      player: {
        x: map.player.x * TILE_SIZE,
        y: map.player.y * TILE_SIZE
      },
      walls: this.walls
    }
  }

  readTileMap(tileMap, symbolMap) {

    tileMap.forEach((data, row) => {
      const tiles = data.split(' ')
      tiles.forEach((tile, col) => {
        const data = symbolMap[tile]
        if (data) {
          this.toEntity(data, col, row)
        }
      }, [row])
    })
  }

  toEntity(data, col, row) {
    switch(data.type) {
      case ENTITY_TYPE.WALL: {
        this.walls.push({
          x: col * TILE_SIZE,
          y: row * TILE_SIZE,
          sprite: data.sprite
        })
        break
      }
    }
  }
}
