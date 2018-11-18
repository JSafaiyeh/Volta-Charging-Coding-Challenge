import React, { Component } from 'react';
import { Text } from 'react-native';

class StationDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.station.name}`,
  });

  render() {
    const { navigation } = this.props;
    const station = navigation.getParam('station', {});

    return (
      <Text>{station.name}</Text>
    )
  }
}

export default StationDetailScreen;