import { connect } from 'react-redux'
import Game from '../components/game.js'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const gameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default gameContainer
