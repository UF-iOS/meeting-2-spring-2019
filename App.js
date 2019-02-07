import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Person from './person';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 30,
  }
})










const SquareCircleCenter = () => (
  <View style={{ backgroundColor: 'blue', 
  height: 200, width: 200, justifyContent: 'center', 
  alignItems: 'center' }}>

    <View style={{ backgroundColor: 'red', 
    height: 50, width: 50, borderRadius: 25 }} />

  </View>
)

const ManySquares = () => (
  <View style={{ backgroundColor: 'blue', height: 200, 
  width: 200, flexDirection: 'row', flexWrap: 'wrap', overflow: 'hidden' }}>

    {Array.from({ length: 9 }).map((e, i) => (
      <View style={{ backgroundColor: i % 2 == 0 ? 'yellow' : 'red', 
      height: 40, width: 40, margin: 10 }}/>
    ))}

  </View>
)





class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ManySquares />
        <Text style={styles.text}>Siddha's Dungeon</Text>
      </View>
    )
  }
}

export default App;
