import React from 'react';
import { Text, View } from 'react-native';

class Person extends React.Component {
  render() {
    return (
      <View style={{ height: 100, width: 100, backgroundColor: 'yellow' }}>
        <Text>{this.props.name}</Text>
      </View>  
    )
  }
}

export default Person;


