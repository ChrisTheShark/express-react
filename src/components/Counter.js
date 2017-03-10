import React, { PropTypes } from 'react';

export default function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"
          onClick={() => { props.updatePlayerScore(props.index, -1) }}> - </button>
        <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"
          onClick={() => { props.updatePlayerScore(props.index, 1) }}> + </button>
    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired
}
