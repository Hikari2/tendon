import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class tendon extends Component {
  render() {
    return (<View style={styles.container}>
             <View style={styles.tile}>
               <Text style={styles.letter}>A</Text>
             </View>
             <View style={styles.tile}>
               <Text style={styles.letter}>B</Text>
             </View>
             <View style={styles.tile}>
               <Text style={styles.letter}>C</Text>
             </View>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 80,
  },
});

export default tendon;
