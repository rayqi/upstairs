import React, { Component } from 'react'
import { connect } from 'react-redux'
import getAllFoodThunk from '../store/food'

class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    componentDidMount() {
        return this.props.getAllFood()
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <h1>ALL FOOD</h1>
            </div>
        )
    }
}

const mapState = state => {
    console.log('mapstate', state)
    return {
        food: state.food
    }
}

const mapDispatch = dispatch => {
    console.log('hitting here?')
    return {
        getAllFood: () => {
            dispatch(getAllFoodThunk())
        }
    }
}

export default connect(mapState, mapDispatch)(Food)