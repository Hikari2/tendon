import { ENTITY_TYPE, STATE_TYPE } from '../constants/gameConstants'
import Directions from './directions'

export default class SpriteLoader {
  constructor(type, id) {
    this.type =  type
    this.id = id
  }

  getSprite(state, frame, direction) {
    let index = frame - (frame % 3) * frame
    if (index === 0) {
      index = 1
    }
    switch(state) {
      case STATE_TYPE.MOVING: {
        return 'sprites_'+this.type + '_' + state + '_' + direction + '_' + index
      }
    }
  }
  directionToRow(direction) {
    switch(direction) {
      case Directions.TOP: {
        return 1
      }
      case Directions.LEFT: {
        return 2
      }
      case Directions.RIGHT: {
        return 3
      }
      case Directions.DOWN: {
        return 4
      }
    }
  }

  get sprites() {
    return this.frames
  }

  loadSpriteSheets(type, id) {
    switch(type) {
      case ENTITY_TYPE.PLAYER: {
        return {
          movement: this.loadMovementSheet(type, id)
        }
      }
    }
  }

  loadMovementSheet(type, id) {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    let sprites = []
    let image = new Image()
    image.onload = splice
    image.src = './assets/sprites/' + type + '/' + id + '/movement.png'

    function splice() {
      let w2 = image.width  / 3
      let h2 = image.height / 4
      canvas.width  = w2
      canvas.height = h2

      for(let i=0; i < 12; i++) {
        let x = (-w2*i) % (w2*2)
        let y = (h2*i)<=h2? 0 : -h2
        ctx.drawImage(this, x, y, w2*2, h2*2)
        sprites.push( canvas.toDataURL() )
      }
    }

    return sprites
  }
}
