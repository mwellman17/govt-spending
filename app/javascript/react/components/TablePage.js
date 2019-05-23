import React, { Component } from 'react'
import BalancesTable from './BalancesTable'

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      total: 0
    }
  }

  componentDidMount() {
    fetch(`/api/v1/results/${this.props.params.id}`, { credentials: 'same-origin' })
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
      this.setState({ results: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let table = (
        <BalancesTable
          title="Christina Ho Query"
          instruments={this.state.results}
          length={this.state.results.length}
        />
      )

    return(
      <div>
        {table}
      </div>
    )
  }
}

export default TablePage;
