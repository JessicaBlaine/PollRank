import React from 'react';

import NewOptionsIndex from './new_options_index';

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: '', options: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ question: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  
  render() {
    return (
      <form className="new-poll" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.question}
          onChange={this.handleChange}
        />
        <NewOptionsIndex />
      </form>
    );
  }
}

export default NewPoll;
