import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from './components'
import Routes from './routes'
import { withRouter } from 'react-router-dom'

class App extends Component {

  render() {
    console.log('hello here')
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}


export default withRouter(connect(null, null)(App))
