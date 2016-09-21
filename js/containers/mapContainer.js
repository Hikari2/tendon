import { connect } from 'react-redux'
import Map from '../components/map.js'
import {movePlayer} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    player: state.player,
    camera: state.camera
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTouch: (x, y, origin) => {
      dispatch(movePlayer(x, y, origin))
    }
  }
}

const gameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default gameContainer
