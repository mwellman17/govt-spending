import React, { Component } from 'react'
import { Link } from 'react-router';

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
        <Link to="/results/1">Christina Ho Query</Link>
      </div>
    )
  }
}

export default ResultsIndex;
