import * as PlayerActionTypes from '../actionTypes/player';

const initialState = [
  {
      id: 1,
      name: "Chris Dyer",
      score: 32
    },
    {
      id: 2,
      name: "John Thomas",
      score: 13
    },
    {
      id: 3,
      name: "Tommy Pence",
      score: 26
    }
];

export default function Player(state=initialState, action) {
  switch (action.type) {
    case: PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.name,
          score: 0
        }
      ];

    case: PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case: PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (action.index === index) {
          return {
            ...player,
            score: player.score + action.score
          }
        }
        return player;
      });

    default:
      return state;
  }
}
