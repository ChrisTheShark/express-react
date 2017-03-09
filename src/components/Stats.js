import React, { PropTypes } from 'react';

export default function Stats(props) {
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce(
    (total, player) => { return total + player.score; }, 0
  );

  return (
    <table>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: PropTypes.array.isRequired
}
