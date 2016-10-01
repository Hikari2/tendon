import { connect } from 'react-redux'
import Game from '../components/game.js'
import {loadLevel} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
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
