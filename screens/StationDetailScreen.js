import React, { Component } from 'react';
import { View } from 'react-native';
import Address from '../components/Address';
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
        <Address coordinates={station.location.coordinates} name={station.name} street={station.street_address} city={station.city} state={station.state} zip={station.zip_code} />
      </View>
    )
  }
}

export default StationDetailScreen;