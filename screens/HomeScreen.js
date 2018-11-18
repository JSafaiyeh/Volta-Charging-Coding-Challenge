import React, { Component } from 'react';
import { View } from 'react-native';
import StationsList from '../component/StationsList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Stations',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <StationsList onItemPress={(station) => navigation.push('Detail', { station })} />
      </View>
    );
  }
}

export default HomeScreen;
