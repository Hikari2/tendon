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
    })
  },

  getInitialState() {
    return {
        touchX: null,
        touchY: null
      }
  },

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.setState({
          touchX: gestureState.x0,
          touchY: gestureState.y0
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState({
          touchX: gestureState.moveX,
          touchY: gestureState.moveY
        })
      },
      onPanResponderRelease: () => {
        this.setState({
          touchX: null,
          touchY: null
        })
      }
    })
  },

  render() {
    return (
      <View style={styles.board} {...this.panResponder.panHandlers}>
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

  update() {
    let x = this.props.player.x
    let y = this.props.player.y
    this.props.onTouch(
      this.state.touchX,
      this.state.touchY,
      {x, y}
    )
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width - 60,
    height: Dimensions.get('window').height - 60,
    backgroundColor: '#644B62'
  }
})
