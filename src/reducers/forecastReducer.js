import { FETCH_FORECASTS } from '../actions/types'
import { TOGGLE_SCALE } from '../actions/types'
import { MOUNT_DAY } from '../actions/types'

const initialState = {
  days: [],
  measures: [],
  isFahrenheit: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECASTS:
      return {
        ...state,
        days: action.payload,
        measures: action.payload[0].measures
      }

    case TOGGLE_SCALE:
      return {
        ...state,
        isFahrenheit: action.payload
      }

    case MOUNT_DAY:
      return {
        ...state,
        measures: action.payload
      }
  
    default:
      return state
  }
}