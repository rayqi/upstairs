import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllFoodThunk } from '../store/food'

class Food extends Component {
    constructor(props) {
        super(props)


    }


    componentDidMount() {
        return this.props.getAllFood()
    }

    render() {
        const listFood = this.props.food
        console.log(listFood)
        return (
            <div>
                <h1>ALL FOOD</h1>
                {listFood.length > 0 ? listFood.map((item) => {
                    return (<li key={item.id}>{item.name}</li>)
                }) : 'We need you in the kitchen while we work out our new menu.'}
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