import React, { PropTypes } from 'react';
import Stopwatch from './Stopwatch';
import Stats from './Stats';

export default function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch/>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
