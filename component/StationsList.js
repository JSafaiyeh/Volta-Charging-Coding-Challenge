import React, { Component, PureComponent } from 'react';
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

class Station extends PureComponent {
  render() {
    const { name, status } = this.props;
    return (
      <View style={stationStyles.container}>
        <Text style={stationStyles.name}>{name}</Text>
        <Text>{status}</Text>
      </View>
    )
  }
}

const stationStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey'
  },
  name: {
    fontSize: 18,
  }
})

class StationsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [],
      fetching: false,
      offset: 0
    }
  }

  componentDidMount = () => {
    this.setState({ fetching: true });
    this.fetchStations();
  }

  fetchStations = () => {
    const { stations, offset } = this.state;

    this.fetchStationsFromAPI(offset).then((res) => {
      if (!res) return;

      this.setState({
        stations: stations.concat(res),
        offset: offset + 50,
        fetching: false
      })
    })
  }

  fetchStationsFromAPI = (offset) => {
    return fetch(`https://api.voltaapi.com/v1/stations?limit=50&offset=${offset}`, {
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
        <ActivityIndicator color='lightgrey' size='large' />
      );
    }
    
    if (stations.length === 0) {
      return (
        <Text>No Stations</Text>
      );
    }

    return (
      <FlatList
        style={listStyles.container}
        showsHorizontalScrollIndicator={false}
        data={stations}
        renderItem={({item}) => <Station {...item} />}
        keyExtractor={(item) => item.id}
        onEndReached={this.fetchStations}
        onEndReachedThreshold={0.7}
      />
    );
  }

  render = () => (
    <View>
      { this.renderList() }
    </View>
  )
}

const listStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  }
})

export default StationsList;
