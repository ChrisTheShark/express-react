import React, { PropTypes } from 'react';
import Counter from './Counter';

export default function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => { props.removePlayer(props.index) }}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
          index={props.index}
          updatePlayerScore={props.updatePlayerScore}
          score={props.score}
        />
      </div>
    </div>
  );
}

Player.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired
};
