import React from 'react';
import Player from './components/player';

import {getMovement, getDirection} from './utils/playerMovement'
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';

export default React.createClass({
  getInitialState() {
    return {
        touch_x: null,
        touch_y: null,
        player_position: new Animated.ValueXY(),
        player_x: Dimensions.get('window').width / 3,
        player_y: Dimensions.get('window').height / 3,
        player_direction: 'NEUTRAL'
      }
  },

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.setState({
          touch_x: gestureState.x0,
          touch_y: gestureState.y0
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState({
          touch_x: gestureState.moveX,
          touch_y: gestureState.moveY
        })
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({
          touch_x: null,
          touch_y: null
        })
      }
    })
  },

  render() {
    console.log(this.state.touch_x + ' : ' + this.state.touch_y)
    return (
      <View style={styles.board} {...this.panResponder.panHandlers}>
        <Player x = {this.state.player_x} y = {this.state.player_y}/>
      </View>
    );
  },

  componentDidMount() {
    this.interval  = setInterval(this.update, 1000);
  },

  update() {
    let origin = {x: this.state.player_x, y: this.state.player_y}
    let direction = getDirection(this.state.touch_x, this.state.touch_y, origin)
    this.setState({direction: direction})
    let movement = getMovement(direction)

    this.state.player_position.setValue({
      x: this.state.player_position.x + movement.dx,
      y: this.state.player_position.y + movement.dx
    })
    this.setState({
      player_x: this.state.player_x + movement.dx,
      player_y: this.state.player_y + movement.dy
    })
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width - 60,
    height: Dimensions.get('window').height - 60,
    backgroundColor: '#644B62'
  }
});
