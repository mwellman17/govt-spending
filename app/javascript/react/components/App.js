import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomePage from './HomePage'
import ResultsIndex from './ResultsIndex'
import TablePage from './TablePage'
import ResponseForm from './ResponseForm'

const App = props => {
  return(

  <Router history={browserHistory}>
    <Route path='/' component={HomePage} />
    <Route path='/results' component={ResultsIndex} />
    <Route path='/results/:id' component={TablePage} />
    <Route path='/responses' component={ResponseForm} />
  </Router>

  )
}

export default App
