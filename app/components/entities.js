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
    entities: React.PropTypes.array,
    tileSize: React.PropTypes.number,
    left: React.PropTypes.number,
    top: React.PropTypes.number
  },

  getInitialState() {
    return {
    }
  },

  componentWillMount() {

  },

  displayName: 'Entities',
  render() {
    return (
      <View style={{position: 'absolute', left: 0, top: 0}}>
        {this.renderEntities()}
      </View>
    )
  },

  renderEntities() {
    return this.props.entities.map((entity, i) => {
      return (
        <View style={this.getWrapperStyle(entity)} key={i}>
          <Sprite
            offset={[0, 4]}
            tileHeight={this.props.tileSize}
            tileWidth ={this.props.tileSize}
            repeat={true}
            src={entity.sprite}
            scale={isFinite(this.context.scale) ? 1 : 1}
            state={entity.facing}
            steps={[9, 9, 9, 9, 14, 14, 14, 14]}
            ticksPerFrame={2}
          />
        </View>
      )
    })
  },

  getWrapperStyle(entity) {
    return {
      position: 'absolute',
      left: entity.x + this.props.left,
      top: entity.y + this.props.top,
      height: this.props.tileSize,
      width: this.props.tileSize
    }
  }
})
