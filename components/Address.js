import React, { Component } from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class Address extends Component {

  openMap = () => {
    const { coordinates, name } = this.props;

    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${coordinates[1]},${coordinates[0]}`;
    const label = name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url); 
  }
  render() {
    const { street, city, state, zip } = this.props;

    return (
      <TouchableHighlight underlayColor={'lightgrey'} style={styles.container} onPress={() => this.openMap()}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.header}>Address</Text>
            <Text style={styles.address}>{street}</Text>
            <Text style={styles.address}>{city}, {state} {zip}</Text>
          </View>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrow: {
    fontSize: 30,
    fontWeight: '300',
    color: '#323232'
  },
  header: {
    fontSize: 20,
    marginBottom: 5
  },
  address: {
    fontSize: 15
  }
})

export default Address;
