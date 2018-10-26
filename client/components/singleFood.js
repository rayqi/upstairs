import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllFoodThunk } from '../store/food';

class SingleFood extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(props)
        return (
            <div>
                <h3>WILL BE SINGLE ITEM</h3>


            </div>
        )

    }
}


const mapState = (state) => {
    return {
        food: state.food
    }
}

const mapDispatch = dispatch => {
    return {
        getAllFood: () => {
            dispatch(getAllFoodThunk())
        }
    }
}



export default connect(mapState, mapDispatch)(SingleFood)
