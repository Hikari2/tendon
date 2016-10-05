import React from 'react'
import {
  View
} from 'react-native'
import { Sprite } from 'react-game-kit/native'

export default React.createClass({
  contextTypes: {
    scale: React.PropTypes.number
  },

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    left: React.PropTypes.number,
    top: React.PropTypes.number,
    moving: React.PropTypes.bool,
    facing: React.PropTypes.number,
    tileSize: React.PropTypes.number
  },

  getInitialState() {
    return {
    }
  },

  componentWillMount() {

  },

  getWrapperStyle() {
    return {
      position: 'absolute',
      left: this.props.x + this.props.left,
      top: this.props.y + this.props.top,
      height: this.props.tileSize,
      width: this.props.tileSize,
      borderWidth: 1,
      borderColor: '#ff0000'
    }
  },

  render() {
    return (
      <View style={this.getWrapperStyle()}>
        <Sprite
          offset={[0, 4]}
          tileHeight={50}
          tileWidth ={50}
          repeat={true}
          src={require('../assets/sprites/player/character-sheet.png')}
          scale={isFinite(this.context.scale) ? 1 : 1}
          state={this.props.facing}
          steps={[9, 9, 9, 9, 14, 14, 14, 14]}
          ticksPerFrame={2}
        />
      </View>
    )
  }
})
