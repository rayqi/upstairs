import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='menu_container'>
            <h1>MENU</h1>
            <div className='menu_img'>
                <Link className='menu_link' to="/menu/food">
                    <img className='menu_link_img' src="http://blogs-images.forbes.com/halrubenstein/files/2016/12/Cookshop-1200x675.jpg" />
                </Link>
            </div>
            <div className='menu_img'>
                <Link className='menu_link' to="/drinks">
                    <img className='menu_link_img' src="https://punchdrink.com/wp-content/uploads/2015/12/slide-mountain-wide.jpg" /></Link>
            </div>
        </div>

    }
}



export default connect(null, null)(Menu);


