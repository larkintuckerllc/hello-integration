import { PropTypes } from 'prop-types';
import React from 'react';

const Room = ({ on, toggleOn }) => (
  <div>
    <div>{on ? 'On': 'Off'}</div>
    <button onClick={toggleOn}>Toggle</button>
  </div>
);

Room.propTypes = {
  on: PropTypes.bool.isRequired,
  toggleOn: PropTypes.func.isRequired,
};

export default Room;
