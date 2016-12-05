import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    const gotopage2 = ()=> Actions.pageTwo({
        text:"i am from page 1"
    });
    return (
      <View style={{margin: 128}}>
        <Text onPress={gotopage2}>This is PageOne!</Text>
      </View>
    )
  }
}