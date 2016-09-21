import React from 'react'
import MapContainer from '../containers/mapContainer'
import {
  StyleSheet,
  View,
  Dimensions
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
      }
  },

  render() {
    return (
      <View style={styles.board}>
        <MapContainer/>
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
