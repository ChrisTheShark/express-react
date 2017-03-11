import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends React.Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
    selectedPlayerIndex: PropTypes.number.isRequired,
    title: PropTypes.string
  };

  static defaultProps = {
    title: "Scoreboard"
  };

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(
      PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(
      PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(
      PlayerActionCreators.updatePlayerScore, dispatch);
    const onPlayerSelect = bindActionCreators(
      PlayerActionCreators.inspectPlayer, dispatch);

    const playerComponents = players.map((player, index) => {
      return (<Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.id}
        onPlayerSelect={onPlayerSelect}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />);
    });

    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={players}/>
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer}/>

        <div className="player-detail">
          <PlayerDetail selectedPlayerIndex={this.props.selectedPlayerIndex}
                        players={this.props.players}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
}

export default connect(mapStateToProps)(Scoreboard);
