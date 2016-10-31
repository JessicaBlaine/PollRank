import React, { PropTypes } from 'react'

class NewOptionsIndex extends React.Component {
  render() {
    return <div>
      {
        this.state.options.map(option => <NewPollOption />)
      }
      <button>Add another option</button>
    </div>
  }
}

export default NewOptionsIndex;
