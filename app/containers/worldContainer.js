import { connect } from 'react-redux'
import World from '../components/world'
import { movePlayer, turnPlayer, stopPlayer, update } from '../actions/index'
import tileSheetTable from '../utils/tiles'

const mapStateToProps = (state) => {
  return {
    map: state.world,
    tileSheet: tileSheetTable[state.world.type],
    camera: state.camera
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTouch: (x, y) => {
      const angle = {x, y}
      dispatch(movePlayer(angle))
    },

    onTouchMove: (dx, dy) => {
      dispatch(turnPlayer(dx, dy))
    },

    onTouchRelease: () => {
      dispatch(stopPlayer())
    },

    onUpdate: () => {
      dispatch(update())
    }
  }
}

const worldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(World)

export default worldContainer
