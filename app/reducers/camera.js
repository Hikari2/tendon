import {UPDATE} from '../constants/actionTypes'
import {TILE_SIZE} from '../constants/gameConstants'
import {Dimensions} from 'react-native'

const initialState = {
  camX: 0,
  camY: 0
}

export default function camera(state = initialState, action, player, map) {
  switch (action.type) {
    case UPDATE: {
      const maxOffsetX = (map.w * TILE_SIZE ) - Dimensions.get('window').width
      const maxOffsetY = (map.h * TILE_SIZE) - Dimensions.get('window').height
      let camX = player.x - Dimensions.get('window').width / 2
      let camY = player.y - Dimensions.get('window').height / 2

      if (camX > maxOffsetX) {
        camX = maxOffsetX
      } else if (camX < 0) {
        camX = 0
      }

      if (camY > maxOffsetY) {
        camY = maxOffsetY
      } else if (camY < 0) {
        camY = 0
      }

      return {
        camX,
        camY
      }
    }
    default: {
      return state
    }
  }
}
