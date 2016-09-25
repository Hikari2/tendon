import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import tendon from './reducers/index'
import GameContainer from './containers/gameContainer'
import {
  StyleSheet,
  View
} from 'react-native'

let store = createStore(tendon)

export default React.createClass({
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <GameContainer/>
        </View>
      </Provider>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    backgroundColor: '#382a37',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
