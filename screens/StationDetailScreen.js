import React, { Component } from 'react';
import { Text } from 'react-native';

class StationDetailScreen extends Component {

  render() {
    const { navigation } = this.props;
    const station = navigation.getParam('station', {});

    return (
      <Text>{station.name}</Text>
    )
  }
}

export default StationDetailScreen;