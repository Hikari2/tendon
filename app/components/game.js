import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native'
import EntitiyContainer from '../containers/entityContainer'
import WorldContainer from '../containers/worldContainer'
import { Loop, Stage } from 'react-game-kit/native'

export default React.createClass({
  propTypes: {
    onStart: React.PropTypes.func
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
          <Stage style={{ backgroundColor: '#000000' }} height = {Dimensions.get('window').height} width = {Dimensions.get('window').width}>
            <WorldContainer/>
            <EntitiyContainer index={0}/>
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
