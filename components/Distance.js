import geolib from 'geolib';
import React, { Component } from 'react';
import Chip from './Chip';

class Distance extends Component {

  render() {
    const { pointA, pointB } = this.props;
    let distance = parseInt(geolib.getDistance(pointA, pointB) / 1609);

    return (
      <Chip backgroundColor={'grey'} text={`${distance} mi`} />
    );
  }
}

export default Distance;