import React, { Component } from 'react';
import { View } from 'react-native';
import StationsList from './component/StationsList';

export default class App extends Component {
  render() {
    return (
      <View>
        <StationsList />
      </View>
    );
  }
}
