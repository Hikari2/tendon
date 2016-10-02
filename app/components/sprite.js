import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

export default React.createClass({
  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    sprite: React.PropTypes.number,
    height: React.PropTypes.number,
    width: React.PropTypes.number
  },

  getInitialState() {
    return {
    }
  },

  componentWillMount() {

  },

  render() {
    return (
      <View
        style = {[styles.container,
          {
            left: this.props.x,
            top: this.props.y
          }]}>
          <Image style = {{width: this.props.width, height: this.props.height}}
            source = {this.props.sprite}/>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  }
})