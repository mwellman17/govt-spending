import React, { Component } from 'react'
import ReactTable from "react-table"

class BalancesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.length
    }
  }

 componentWillReceiveProps(nextProps) {
   this.setState({ length: nextProps.length })
 }

 render() {
   const data = this.props.instruments;

   return (
    <div>
      <h3 className="table-header">{this.props.title}</h3>
       <ReactTable
        data={data}
        showPagination={false}
        pageSize={this.state.length}
        columns={[
          {
            Header: "Treasury Identifier",
            accessor: "treasury_account_identifier.treasury_account_identifier"
          },
          {
            Header: "Unobligated Balance",
            id: 'unobligated_balance_cpe',
            accessor: d=>Number(d.unobligated_balance_cpe)
          },
          {
            Header: "Agency Name",
            accessor: "treasury_account_identifier.reporting_agency_name"
          },
          {
            Header: "Account Title",
            accessor: "treasury_account_identifier.federal_account.account_title"
          },
          {
            Header: "Start Date",
            accessor: "reporting_period_start"
          },
          {
            Header: "End Date",
            accessor: "reporting_period_end"
          }
        ]}
        className="-striped -highlight"
       />
     </div>
   );
 }
}

export default BalancesTable;
