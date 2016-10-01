import { ENTITY_TYPE } from '../constants/gameConstants'

const tileMap = [
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0 0 0 @'
]

const symbolMap = {}
  symbolMap['0'] = {
    type: null
  }

  symbolMap['@'] = {
    type: ENTITY_TYPE.PLAYER
  }

const map = {
  height: 10,
  width: 15,
  tileMap,
  symbolMap
}

export default map
