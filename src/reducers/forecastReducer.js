import { FETCH_CELSIUS_FORECASTS } from '../actions/types'
import { TOGGLE_CELSIUS } from '../actions/types'

const initialState = {
  items: [],
  isCelsius: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CELSIUS_FORECASTS:
      return {
        ...state,
        items: action.payload
      }

    case TOGGLE_CELSIUS:
      return {
        ...state,
        isCelsius: action.payload
      }
  
    default:
      return state
  }
}