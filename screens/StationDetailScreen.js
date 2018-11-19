import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from '../components/MapView';

class StationDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.station.name}`,
  });

  render() {
    const { navigation } = this.props;
    const station = navigation.getParam('station', {});

    return (
      <View>
        <MapView coordinates={station.location.coordinates}/>
        <Text>{station.name}</Text>
      </View>
    )
  }
}

export default StationDetailScreen;