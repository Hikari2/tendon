import React from 'react'
import WorldContainer from '../containers/worldContainer'
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native'

export default React.createClass({
  propTypes: {

  },

  getInitialState() {
    return {
      }
  },

  render() {
    return (
      <View style={styles.board}>
        <WorldContainer/>
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
