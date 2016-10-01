import { STATE_TYPE } from '../constants/gameConstants'
import { spriteTable } from './spriteTable'

export default class SpriteLoader {
  constructor(type, id) {
    this.type =  type
    this.id = id
  }

  getSprite(state, frame, direction) {
    let index = (frame % 3)
    if (index === 0) {
      index = 3
    }

    let key = ' '

    switch(state) {
      case STATE_TYPE.MOVING: {
        key = 'sprites_'+this.type + '_' + state + '_' + direction + '_' + index
      }
    }
    return spriteTable[key]
  }
}
