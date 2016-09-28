import React from 'react'
import Player from './player'
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder
} from 'react-native'
import { TILE_SIZE } from '../constants/gameConstants'
import lookUp from '../utils/spriteTable'

export default React.createClass({
  propTypes: {
    onTouch: React.PropTypes.func,
    onTouchMove: React.PropTypes.func,
    onTouchRelease: React.PropTypes.func,
    onUpdate: React.PropTypes.func,
    player: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
      direction: React.PropTypes.shape({
        x: React.PropTypes.number,
        y: React.PropTypes.number
      }),
      nextDirection: React.PropTypes.shape({
        x: React.PropTypes.number,
        y: React.PropTypes.number
      }),
      animation: React.PropTypes.shape({
        frame: React.PropTypes.number,
        facing: React.PropTypes.string,
        sprite: React.PropTypes.strng
      })
    }),
    camera: React.PropTypes.shape({
      camX: React.PropTypes.number,
      camY: React.PropTypes.number
    })
  },

  getInitialState() {
    return {
      }
  },

  componentWillMount() {
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt) => {
          this.props.onTouch(
            evt.nativeEvent.pageX ,
            evt.nativeEvent.pageY
          )
        },
        onPanResponderMove: (evt, gestureState) => {
          this.props.onTouchMove(
            gestureState.dx,
            gestureState.dy
          )
        },
        onPanResponderRelease: () => {
          this.props.onTouchRelease()
        }
      })
  },

  render() {
    return (
      <View style={[styles.board, this.getCameraStyle()]}
        {...this.panResponder.panHandlers}>
        <Player x = {this.props.player.x} y = {this.props.player.y} sprite={this.props.player.animation.sprite}/>
        {this.renderGridSystem()}
      </View>
    )
  },

  componentDidMount() {
    this.interval  = setInterval(this.props.onUpdate, 1000/10)
  },

  componentWillUnmount() {
    clearInterval(this.interval)
  },

  getCameraStyle() {
    return ({
      left: -this.props.camera.camX,
      top: -this.props.camera.camY
    })
  },

  renderGridSystem() {
    const h = Dimensions.get('window').height * 2 / TILE_SIZE
    let grid = []
    for (let i = 0; i < h; i++) {
      grid.push(<View style={styles.row} key={`${i}`}/>)
    }
    return grid
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width * 2,
    height: Dimensions.get('window').height * 2,
    backgroundColor: '#F8F8FF',
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#0000FF'
  },
  row: {
    width: Dimensions.get('window').width * 2,
    height: TILE_SIZE,
    borderWidth: 0.5,
    borderColor: '#000000'
  }
})
