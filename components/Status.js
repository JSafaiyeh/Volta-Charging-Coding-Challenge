import React from 'react';
import Chip from './Chip';

const STATUS_COLORS = {
  'under construction': 'orange',
  'active': 'green',
  'needs service': '#FFD700',
  'decommissioned': 'red',
}

const Status = ({ status }) => (
  <Chip backgroundColor={STATUS_COLORS[status]} text={status.toUpperCase()} />
)

export default Status;
