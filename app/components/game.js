import React from 'react'
import WorldContainer from '../containers/worldContainer'
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native'
import PlayerContainer from '../containers/playerContainer'
import { Loop, Stage } from 'react-game-kit/native'

export default React.createClass({
  propTypes: {
    onStart: React.PropTypes.func,
    map: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      tileSize: React.PropTypes.number,
      walls: React.PropTypes.array
    }),
    player: React.PropTypes.object
  },

  getInitialState() {
    return {
      }
  },

  componentWillMount() {
    this.props.onStart()
  },

  render() {
    return (
      <View style={styles.board}>
        <Loop>
          <Stage style={{ backgroundColor: '#3a9bdc' }} height = {Dimensions.get('window').height} width = {Dimensions.get('window').width}>
            <WorldContainer/>
            <PlayerContainer/>
          </Stage>
        </Loop>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000000'
  }
})
