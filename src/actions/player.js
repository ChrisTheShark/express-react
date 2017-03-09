import * as PlayerActionTypes from '../actionTypes/player';

export const addPlayer = (name) => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name: name
  };
};

export const removePlayer = (index) => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index: index
  }
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score
  }
};
