import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>UPSTAIRS HOMEPAGE</h1>
                <h3>located in Chinatown</h3>
                <img src="https://cdn.thecoolist.com/wp-content/uploads/2010/09/pio-pio-restaurant_sebastian-marsical-studio_1.jpg" />
            </div>
        )
    }
}

export default connect(null)(Home)
