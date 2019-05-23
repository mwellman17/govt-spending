import React, { Component } from 'react'

class ResultsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/results', { credentials: 'same-origin' })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ responses: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    return(
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default ResultsIndex;
