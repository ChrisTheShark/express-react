import React, { PropTypes } from 'react';

export default function PlayerDetail(props) {
  if (props.selectedPlayerIndex !== -1) {
    let player = props.players[props.selectedPlayerIndex];
    return (
      <div>
        <h3>{player.name}</h3>
        <ul>
          <li>
            <span>Score: </span>
            {player.score}
          </li>
          <li>
            <span>Created: </span>
            {player.created}
          </li>
          <li>
            <span>Updated: </span>
            {player.updated}
          </li>
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};
