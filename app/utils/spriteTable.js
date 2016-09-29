const spriteTable = {}

spriteTable['sprites_player_moving_down_1'] = require('../assets/sprites/player/moving/down/1.png')
spriteTable['sprites_player_moving_down_2'] = require('../assets/sprites/player/moving/down/2.png')
spriteTable['sprites_player_moving_down_3'] = require('../assets/sprites/player/moving/down/3.png')

spriteTable['sprites_player_moving_left_1'] = require('../assets/sprites/player/moving/left/1.png')
spriteTable['sprites_player_moving_left_2'] = require('../assets/sprites/player/moving/left/2.png')
spriteTable['sprites_player_moving_left_3'] = require('../assets/sprites/player/moving/left/3.png')

spriteTable['sprites_player_moving_right_1'] = require('../assets/sprites/player/moving/right/1.png')
spriteTable['sprites_player_moving_right_2'] = require('../assets/sprites/player/moving/right/2.png')
spriteTable['sprites_player_moving_right_3'] = require('../assets/sprites/player/moving/right/3.png')

spriteTable['sprites_player_moving_top_1'] = require('../assets/sprites/player/moving/top/1.png')
spriteTable['sprites_player_moving_top_2'] = require('../assets/sprites/player/moving/top/2.png')
spriteTable['sprites_player_moving_top_3'] = require('../assets/sprites/player/moving/top/3.png')


export function lookUp(key) {
  return spriteTable[key]
}
