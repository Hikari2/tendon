import { MOVE_PLAER,
  TURN_PLAYER,
  STOP_PLAYER,
  UPDATE,
  LOAD_LEVEL
} from '../constants/actionTypes'
import MapLoader from '../utils/mapLoader'
import { TILE_SIZE, MAP_TYPE, ENTITY_TYPE } from '../constants/gameConstants'
import playerReducer from './player'
import enemyReducer from './enemy'

const mapLoader = new MapLoader()

const initialState = {
  type: MAP_TYPE.DUNGEON,
  background: [],
  foreground: [],
  height: 0,
  width: 0,
  entities: [],
  entityMap: [],
  tileSize: TILE_SIZE
}

export default function world(state = initialState, action, game) {
  switch (action.type) {
    case LOAD_LEVEL: {
      const map = mapLoader.loadMap(game.level)
      const entities = map.entities.map((entity) => {
        switch (entity.type) {
          case ENTITY_TYPE.PLAYER: {
            return playerReducer(entity, action)
          }
          case ENTITY_TYPE.ENEMY: {
            return enemyReducer(entity, action)
          }
          default:
           return entity
        }
      })
      return Object.assign({}, state, map, {entities})
    }
    case MOVE_PLAER:
    case TURN_PLAYER:
    case STOP_PLAYER: {
      let player = state.entities[0]
      player = playerReducer(player, action, state)
      let entities = state.entities.slice(0)
      entities[0] = player
      return Object.assign({}, state, {entities})
    }
    case UPDATE: {
      let entityMap = state.entityMap.slice(0)
      const entities = state.entities.map((entity, i) => {
        switch (entity.type) {
          case ENTITY_TYPE.PLAYER: {
            let player = playerReducer(entity, action)
            if (player.destX !== entity.destX || player.destY !== entity.destY) {
              player.blocked = tileMapCollision(player.destX, player.destY)
              if (!player.blocked) {
                let index = (entity.destX/state.tileSize) + ((entity.destY/state.tileSize)* state.width)
                entityMap[index].splice((entityMap[index].indexOf(i)), 1)
                index = (player.destX/state.tileSize) + ((player.destY/state.tileSize)* state.width)
                if (!entityMap[index].includes(i)) {
                  entityMap[index].push(i)
                }
              }
            }
            return player
          }
          case ENTITY_TYPE.ENEMY: {
            let enemy = enemyReducer(entity, action)
            if (enemy.destX !== entity.destX || enemy.destY !== entity.destY) {
              enemy.blocked = tileMapCollision(enemy.destX, enemy.destY)
              if (!enemy.blocked) {
                let index = (entity.destX/state.tileSize) + ((entity.destY/state.tileSize)* state.width)
                entityMap[index].splice((entityMap[index].indexOf(i)), 1)
                index = (enemy.destX/state.tileSize) + ((enemy.destY/state.tileSize)* state.width)
                if (!entityMap[index].includes(i)) {
                  entityMap[index].push(i)
                }
              }
            }
            return enemy
          }
          default:
            return entity
        }
      })

      // let player = state.entities[0]
      // if (player.moving) {
      //   for (let i = 0; i < state.height; i++) {
      //     let line = ' '
      //     for (let j = 0; j < state.width; j++) {
      //       line += '['+entityMap[j + (i * state.width)] + '], '
      //     }
      //     console.log(line)
      //   }
      //   console.log('-----------------')
      // }
      return Object.assign({}, state, {entities})
    }
    default:
      return state
  }

  function tileMapCollision(x, y) {
    const index = (x / TILE_SIZE) + ((y / TILE_SIZE) * state.width)
    return state.foreground[index] !== 0
  }
}
