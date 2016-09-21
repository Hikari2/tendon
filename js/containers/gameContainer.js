import { connect } from 'react-redux'
import Game from '../components/game.js'
import {movePlayer} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    player: state.player
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
)(Game)

export default gameContainer
