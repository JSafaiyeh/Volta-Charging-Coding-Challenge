import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

class StationsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [],
      fetching: false,
    }
  }

  componentDidMount = () => {
    this.setState({ fetching: true });
    this.fetchStations().then((stations) => { this.setState({ stations, fetching: false }); console.log(stations) });
  }

  fetchStations = () => {
    return fetch('https://api.voltaapi.com/v1/stations', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  }

  renderList = () => {
    const { fetching, stations } = this.state;

    if (fetching) {
      return (
        <ActivityIndicator />
      );
    } else if (stations.length === 0) {
      return (
        <Text>No Stations</Text>
      );
    }

    console.log(stations)

    return (
      <FlatList
        data={stations}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    );
  }

  render() {
    const { stations } = this.state;

    return (
      <View>
        { this.renderList() }
      </View>
    )
  }
}

export default StationsList;
