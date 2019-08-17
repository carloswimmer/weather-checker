import axios from 'axios'
import { idApi } from '../env'
import { FETCH_CELSIUS_FORECASTS } from './types'
import { TOGGLE_CELSIUS } from './types'

export const fetchForecasts = isCelsius => dispatch => {
  let scale = isCelsius ? 'metric' : 'imperial'
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&` +
  `units=${scale}&APPID=${idApi}&cnt=40`
  
  axios.get(url)
    .then(response => response.data.list)
    .then(forecasts => dispatch({
      type: FETCH_CELSIUS_FORECASTS,
      payload: forecasts
    }))
    .catch(error => console.log(error.response.data.message))
}

export const toggleIsCelsius = isCelsius => dispatch => {
  isCelsius = !isCelsius
  dispatch({
    type: TOGGLE_CELSIUS,
    payload: isCelsius
  })
}