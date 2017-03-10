import React, { Component, PropTypes } from 'react';

export default class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }
  addPlayer = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: "" })
  }
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func.isRequired
}
