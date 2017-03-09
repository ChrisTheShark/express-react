import React, { Component, PropTypes } from 'react';

export default class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" })
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
