import React from 'react'
import Player from './player'
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder
} from 'react-native'

export default React.createClass({
  propTypes: {
    onTouch: React.PropTypes.func,
    player: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
      direction: React.PropTypes.string
    }),
    camera: React.PropTypes.shape({
      offsetX: React.PropTypes.number,
      offsetY: React.PropTypes.number
    })
  },

  getInitialState() {
    return {
        touchX: -1,
        touchY: -1,
        touchDX: 0,
        touchDY: 0
      }
  },

  componentWillMount() {
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt) => {
          this.setState({
            touchX: evt.nativeEvent.locationX ,
            touchY: evt.nativeEvent.locationY
          })
          },
        onPanResponderMove: (evt, gestureState) => {
          this.setState({
            touchDX: gestureState.dx,
            touchDY: gestureState.dy
          })
        },
        onPanResponderRelease: () => {
          this.setState({
            touchX: -1,
            touchY: -1,
            touchDX: 0,
            touchDY: 0
          })
        }
      })
  },

  render() {
    return (
      <View style={[styles.board, this.getCameraStyle()]}
        {...this.panResponder.panHandlers}>
        <Player x = {this.props.player.x} y = {this.props.player.y}/>
      </View>
    )
  },

  componentDidMount() {
    this.interval  = setInterval(this.update, 1000)
  },

  componentWillUnmount () {
    clearInterval(this.interval)
  },

  getCameraStyle () {
    return ({
      left: this.props.camera.offsetX,
      top: this.props.camera.offsetY
    })
  },

  update() {
    const x = this.props.player.x
    const y = this.props.player.y
    this.props.onTouch(
      this.state.touchX + this.state.touchDX,
      this.state.touchY + this.state.touchDY,
      {x, y}
    )
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width * 2,
    height: Dimensions.get('window').height * 1-2,
    backgroundColor: '#F8F8FF',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#0000FF'
  }
})
