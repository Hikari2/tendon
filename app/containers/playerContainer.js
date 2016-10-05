import { connect } from 'react-redux'
import Player from '../components/player.js'

const mapStateToProps = (state) => {
  return {
    x: state.player.x,
    y: state.player.y,
    moving: state.player.moving,
    facing: state.player.moving ? state.player.facing : state.player.facing + 4,
    tileSize: state.map.tileSize,
    left: -state.camera.camX,
    top: -state.camera.camY
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const worldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default worldContainer
