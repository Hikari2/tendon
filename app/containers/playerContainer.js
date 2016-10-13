import { connect } from 'react-redux'
import Player from '../components/player'
import spriteSheetTable from '../utils/sprites'

const mapStateToProps = (state) => {
  const player = state.world.entities[0]
  return {
    x: player.x,
    y: player.y,
    moving: player.moving,
    sprite: spriteSheetTable[player.type],
    facing: player.moving ? player.facing : player.facing + 4,
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

const playerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default playerContainer
