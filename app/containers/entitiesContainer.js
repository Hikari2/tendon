import { connect } from 'react-redux'
import Entities from '../components/entities'
import spriteSheetTable from '../utils/sprites'
import { TILE_SIZE, MAP_TYPE, ENTITY_TYPE } from '../constants/gameConstants'

const mapStateToProps = (state) => {
  const entities = state.world.entities.map((entity) => {
    return {
      x: entity.x,
      y: entity.y,
      moving: entity.moving,
      sprite: spriteSheetTable[entity.type],
      facing: entity.moving ? entity.facing : entity.facing + 4
    }
  })

  return {
    entities,
    tileSize: state.world.tileSize,
    left: -state.camera.camX,
    top: -state.camera.camY
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const entitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entities)

export default entitiesContainer
