import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LAT_DELTA = 0.0922
const LONG_DELTA = 0.0421;
const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: LAT_DELTA,
  longitudeDelta: LONG_DELTA,
};

class StationMap extends React.Component {

  onMapReady = () => {
    let latitude = this.props.coordinates[1]; 
    let longitude = this.props.coordinates[0];

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: LAT_DELTA,
      longitudeDelta: LONG_DELTA,
    })
  }

  render = () => (
    <MapView
      ref={map => this.map = map}
      style={styles.map}
      initialRegion={INITIAL_REGION}
      onMapReady={this.onMapReady}
    >
      <Marker 
        coordinate={{ latitude: this.props.coordinates[1], longitude: this.props.coordinates[0] }}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default StationMap;
