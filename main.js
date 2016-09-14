import React, { Component } from 'react'
import Game from './game.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Game/>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#644B62'
  }
});
