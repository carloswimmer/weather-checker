import { FETCH_FORECASTS } from '../actions/types'
import { TOGGLE_SCALE } from '../actions/types'
import { CHANGE_DAYS } from '../actions/types'
import { CHANGE_DETAILS } from '../actions/types'

const initialState = {
  days: [],
  measures: [],
  isFahrenheit: false,
  dayCards: [0, 1, 2],
  detailsDate: '',
  dayDescription: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECASTS:
      return {
        ...state,
        days: action.payload,
        measures: action.payload[0].measures,
        dayCards: [0, 1, 2],
        detailsDate: action.payload[0].date,
        dayDescription: action.payload[0].averageDescription
      }

    case TOGGLE_SCALE:
      return {
        ...state,
        isFahrenheit: action.payload
      }

    case CHANGE_DAYS:
      return {
        ...state,
        dayCards: action.payload
      }

    case CHANGE_DETAILS:
      return {
        ...state,
        measures: action.payload.measures,
        detailsDate: action.payload.date,
        dayDescription: action.payload.averageDescription
      }
  
    default:
      return state
  }
}