import { connect } from 'react-redux'
import Entity from '../components/entity'
import spriteSheetTable from '../utils/sprites'

const mapStateToProps = (state, ownProps) => {
  const entity = state.world.entities[ownProps.index]
  return {
    x: entity.x,
    y: entity.y,
    moving: entity.moving,
    sprite: spriteSheetTable[entity.type],
    facing: entity.moving ? entity.facing : entity.facing + 4,
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

const entityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity)

export default entityContainer
