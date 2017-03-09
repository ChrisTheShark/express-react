import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players:   [{
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
        }]
    }
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }
  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }
  onPlayerAdd(name) {
    this.state.players.push({
      id: this.state.players.length + 1,
      name: name,
      score: 0
    });
    this.setState(this.state);
  }
  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>
        <div className="players">
          {
            this.state.players.map((player, index) => {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.id}
                  onScoreChange={(delta) => { this.onScoreChange(index, delta); }}
                  onRemove={() => { this.onRemovePlayer(index); }}
                />
              );
            })
          }
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd}/>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  title: PropTypes.string
};

Scoreboard.defaultProps = {
  title: "Scoreboard"
};

export default Scoreboard;
