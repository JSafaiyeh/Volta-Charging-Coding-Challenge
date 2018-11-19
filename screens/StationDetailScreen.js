import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Address from '../components/Address';
import Chip from '../components/Chip';
import Distance from '../components/Distance';
import MapView from '../components/MapView';
import Meter from '../components/Meter';
import Status from '../components/Status';

class StationDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.station.name}`,
  });

  constructor(props) {
    super(props);

    this.state = {
      coordinates: null
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({ coordinates: pos.coords })
    }, (error) => console.log(error))
  }

  render() {
    const { navigation } = this.props;
    const { coordinates } = this.state;
    const station = navigation.getParam('station', {});

    return (
      <View>
        <MapView coordinates={station.location.coordinates}/>
        <View style={styles.chipContainer}>
          <Status status={station.status} />
          {
            station.pay_to_park ? <Chip text={'Pay To Park'} backgroundColor={'green'} /> : null
          }
          {
            station.meters.map((meter) => <Meter key={meter.id} oem={meter.oem} />)
          }
          {
            coordinates === null ? null : <Distance pointA={coordinates} pointB={{latitude: station.location.coordinates[1], longitude: station.location.coordinates[0]}} />
          }
        </View>
        <Address coordinates={station.location.coordinates} name={station.name} street={station.street_address} city={station.city} state={station.state} zip={station.zip_code} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default StationDetailScreen;