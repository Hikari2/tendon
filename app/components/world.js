import React from 'react'
import Sprite from './sprite'
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder
} from 'react-native'
import { TILE_SIZE } from '../constants/gameConstants'
import { TileMap } from 'react-game-kit/native'

export default React.createClass({
  contextTypes: {
    loop: React.PropTypes.object
  },

  propTypes: {
    onTouch: React.PropTypes.func,
    onTouchMove: React.PropTypes.func,
    onTouchRelease: React.PropTypes.func,
    onUpdate: React.PropTypes.func,
    map: React.PropTypes.shape({
      tileSize: React.PropTypes.number,
      background: React.PropTypes.array,
      foreground: React.PropTypes.array,
      height: React.PropTypes.number,
      width: React.PropTypes.number,
      player: React.PropTypes.object
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
            evt.nativeEvent.pageX + this.props.camera.camX,
            evt.nativeEvent.pageY + this.props.camera.camY
          )
        },
        onPanResponderMove: (evt, gestureState) => {
          this.props.onTouch(
            gestureState.moveX + this.props.camera.camX,
            gestureState.moveY + this.props.camera.camY
          )
        },
        onPanResponderRelease: () => {
          this.props.onTouchRelease()
        }
      })
  },

  render() {
    return (
      <View style={[styles.board, this.getCameraStyle(), this.getBoardSize()]}
        {...this.panResponder.panHandlers}>
        <TileMap
          sourceWidth={320}
          src={require('../assets/sprites/tiles/tiles.png')}
          tileSize={this.props.map.tileSize}
          columns={this.props.map.width}
          rows={this.props.map.height}
          layers={[
            this.props.map.background,
            this.props.map.foreground
          ]}
        />
      </View>
    )
  },

  componentDidMount() {
    this.context.loop.subscribe(this.props.onUpdate)
  },

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.props.onUpdate)
  },

  getBoardSize() {
    return {
      width: this.props.map.width * this.props.map.tileSize,
      height: this.props.map.height * this.props.map.tileSize
    }
  },

  getCameraStyle() {
    return ({
      left: -this.props.camera.camX,
      top: -this.props.camera.camY
    })
  }
})

const styles = StyleSheet.create({
  board: {
    backgroundColor: '#F8F8FF'
  }
})
