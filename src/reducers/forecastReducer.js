import { FETCH_FORECASTS } from '../actions/types'
import { TOGGLE_SCALE } from '../actions/types'

const initialState = {
  items: [],
  isFahrenheit: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECASTS:
      return {
        ...state,
        items: action.payload
      }

    case TOGGLE_SCALE:
      return {
        ...state,
        isFahrenheit: action.payload
      }
  
    default:
      return state
  }
}