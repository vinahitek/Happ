import React, { Component,Prop } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class pageTwo extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}