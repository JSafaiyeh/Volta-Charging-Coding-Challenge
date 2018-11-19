import React from 'react';
import Chip from './Chip';

const OEM_COLORS = {
  ekm: 'purple',
  emw: 'blue'
}

const Meter = ({ oem }) => (
  <Chip backgroundColor={OEM_COLORS[oem]} text={oem.toUpperCase()} />
)

export default Meter;
