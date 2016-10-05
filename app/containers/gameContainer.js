import { connect } from 'react-redux'
import Game from '../components/game.js'
import {loadLevel} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    map: state.map,
    player: state.player,
    camera: state.camera
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStart: () => {
      dispatch(loadLevel())
    }
  }
}

const gameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default gameContainer
