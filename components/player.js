import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default React.createClass({
  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number
  },

  getInitialState() {
    return {
    }
  },

  componentWillMount() {
    this.setStae();
  },

  render() {
    return (
      <View
        style = {[styles.container,
          {
            left: this.props.x,
            top: this.props.y
          }]}>
        <View style={styles.tile}>
          <Text style={styles.letter}>P</Text>
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#644B62',
  },
  tile: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 40,
  },
});
