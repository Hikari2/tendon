import { ENTITY_TYPE } from '../constants/gameConstants'
import { spriteTable } from '../utils/spriteTable'

const tileMap = [
  '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 0 0 0 0 0 1',
  '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1'
]

const symbolMap = {}

  symbolMap['1'] = {
    type: ENTITY_TYPE.WALL,
    sprite: spriteTable['sprites_wall_stone_1']
  }

  symbolMap['2'] = {
    type: ENTITY_TYPE.WALL,
    sprite: spriteTable['sprites_wall_stone_2']
  }

  symbolMap['3'] = {
    type: ENTITY_TYPE.WALL,
    sprite: spriteTable['sprites_wall_stone_3']
  }

const map = {
  height: 10,
  width: 15,
  player: {
    x: 10,
    y: 6
  },
  tileMap,
  symbolMap
}

export default map
