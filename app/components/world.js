import React from 'react'
import Sprite from './sprite'
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder
} from 'react-native'
import { TILE_SIZE } from '../constants/gameConstants'

export default React.createClass({
  propTypes: {
    onTouch: React.PropTypes.func,
    onTouchMove: React.PropTypes.func,
    onTouchRelease: React.PropTypes.func,
    onUpdate: React.PropTypes.func,
    map: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      tileSize: React.PropTypes.number,
      walls: React.PropTypes.array
    }),
    player: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
      direction: React.PropTypes.strng,
      nextDirection: React.PropTypes.strng,
      height: React.PropTypes.number,
      width: React.PropTypes.number,
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
        x: -50,
        y: -50
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
          this.setState({
            x: evt.nativeEvent.pageX + this.props.camera.camX,
            y: evt.nativeEvent.pageY + this.props.camera.camY
          })
        },
        onPanResponderMove: (evt, gestureState) => {
          this.props.onTouch(
            gestureState.moveX + this.props.camera.camX,
            gestureState.moveY + this.props.camera.camY
          )
          this.setState({
            x: gestureState.moveX + this.props.camera.camX,
            y: gestureState.moveY + this.props.camera.camY
          })
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
        {this.renderGridSystem()}
        {this.renderPlayer()}
        <View style = {[styles.circle,
            {
              left: this.state.x - 25,
              top: this.state.y - 25
            }]}/>
      </View>
    )
  },

  componentDidMount() {
    this.interval  = setInterval(this.props.onUpdate, 1000/10)
  },

  componentWillUnmount() {
    clearInterval(this.interval)
  },

  renderWalls() {
    const walls = this.props.map.walls
    return walls.map((data, i) => {
      const difX = Math.abs(data.x - this.props.player.x)
      const difY = Math.abs(data.y - this.props.player.y)
      if (difX <= Dimensions.get('window').width / 3 && difY <= Dimensions.get('window').height) {
        return <Sprite x = {data.x}
                  y = {data.y}
                  sprite = {data.sprite}
                  height = {this.props.map.tileSize}
                  width = {this.props.map.tileSize}
                  key = {`tile-${i}`}/>
      }
    })
  },

  renderPlayer() {
    return <Sprite x = {this.props.player.x}
            y = {this.props.player.y}
            sprite = {this.props.player.animation.sprite}
            height = {this.props.player.height}
            width = {this.props.player.width}/>
  },

  getBoardSize() {
    return {
      width: this.props.map.width,
      height: this.props.map.height
    }
  },

  getCameraStyle() {
    return ({
      left: -this.props.camera.camX,
      top: -this.props.camera.camY
    })
  },

  renderGridSystem() {
    const h = this.props.map.height * 2 / TILE_SIZE
    let grid = []
    for (let i = 0; i < h; i++) {
      grid.push(<View style={styles.row} key={`${i}`}/>)
    }
    return grid
  }
})

const styles = StyleSheet.create({
  board: {
    backgroundColor: '#F8F8FF'
  },
  row: {
    height: TILE_SIZE,
    borderWidth: 0.5,
    borderColor: '#000000'
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF0000'
  }
})
