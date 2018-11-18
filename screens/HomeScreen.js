import React, { Component } from 'react';
import { View } from 'react-native';
import StationsList from '../component/StationsList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Stations',
  };

  render() {
    return (
      <View>
        <StationsList />
      </View>
    );
  }
}

export default HomeScreen;
