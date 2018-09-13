import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import foodpic from './'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <h1>MENU</h1>
            <div>
                <Link to="/food">                <img src="http://blogs-images.forbes.com/halrubenstein/files/2016/12/Cookshop-1200x675.jpg" />
                </Link>
            </div>
            <div>
                <Link to="/drinks"><img src="https://punchdrink.com/wp-content/uploads/2015/12/slide-mountain-wide.jpg" /></Link>
            </div>
        </div>

    }
}



export default connect(null, null)(Menu);


