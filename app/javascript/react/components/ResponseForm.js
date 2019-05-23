import React, { Component } from 'react'

const QUERY = {
  "limit":250,
  "filters": [{
    "combine_method": "AND",
    "filters": [{
      "field": "treasury_account_identifier__ending_period_of_availability",
      "operation": "less_than",
      "value": "2012"
    },
    {
      "field": "treasury_account_identifier__availability_type_code",
      "operation": "not_equals",
      "value": "X"
    },
    {
      "field": "unobligated_balance_cpe",
      "operation":"greater_than",
      "value": 0
    }]
  }]
}

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.fetchResponse = this.fetchResponse.bind(this)
  }

  fetchResponse() {
    fetch("https://api.usaspending.gov/api/v1/tas/balances/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(QUERY)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let responseBody = body
      fetch("/api/v1/responses", {
        method: "POST",
        body: JSON.stringify(responseBody)
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        debugger
        console.table(body)
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return(
      <div>
        <button onClick={this.fetchResponse}>Christina Ho</button>
      </div>
    )
  }
}

export default ResponseForm;
