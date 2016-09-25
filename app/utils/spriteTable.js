
const spriteTable = [
  {
    id: 'sprites_player_moving_down_1',
    img: require('../assets/sprites/player/moving/down/1.png')
  },
  {
    id: 'sprites_player_moving_down_2',
    img: require('../assets/sprites/player/moving/down/2.png')
  },
  {
    id: 'sprites_player_moving_down_3',
    img: require('../assets/sprites/player/moving/down/3.png')
  },
  {
    id: 'sprites_player_moving_left_1',
    img: require('../assets/sprites/player/moving/left/1.png')
  },
  {
    id: 'sprites_player_moving_left_2',
    img: require('../assets/sprites/player/moving/left/2.png')
  },
  {
    id: 'sprites_player_moving_left_3',
    img: require('../assets/sprites/player/moving/left/3.png')
  },
  {
    id: 'sprites_player_moving_right_1',
    img: require('../assets/sprites/player/moving/right/1.png')
  },
  {
    id: 'sprites_player_moving_right_2',
    img: require('../assets/sprites/player/moving/right/2.png')
  },
  {
    id: 'sprites_player_moving_right_3',
    img: require('../assets/sprites/player/moving/right/3.png')
  },
  {
    id: 'sprites_player_moving_top_1',
    img: require('../assets/sprites/player/moving/top/1.png')
  },
  {
    id: 'sprites_player_moving_top_2',
    img: require('../assets/sprites/player/moving/top/2.png')
  },
  {
    id: 'sprites_player_moving_top_3',
    img: require('../assets/sprites/player/moving/top/3.png')
  }
]



export default function lookUp(key) {
let result

spriteTable.forEach((item) => {
    if (item.id === key) {
      result = item
    }
  }, key)

  if (result === undefined) {
    result = {
      id: 'nothing',
      img: 'nothing'
    }
  }

  return result
}
