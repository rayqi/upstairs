import axios from "axios";

//action type
const GET_FOOD = 'GET_FOOD'

//action creator

export const getFood = food => (
    {
        type: GET_FOOD,
        food
    }
)

//thunks

export const getAllFoodThunk = () => {
    return dispatch => {
        axios
            .get('/api/food')
            .then(res => dispatch(getFood(res.data)))
            .catch(err => console.error('could not find', err))
    }
}

//reducer
const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_FOOD:
            return [...action.food]
        default:
            return state
    }
}

export default reducer;

