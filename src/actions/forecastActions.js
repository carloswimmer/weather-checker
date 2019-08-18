import axios from 'axios'
import { idApi } from '../env'
import { FETCH_FORECASTS } from './types'
import { TOGGLE_SCALE } from './types'

export const fetchForecasts = isFahrenheit => dispatch => {
  let scale = isFahrenheit ? 'imperial' : 'metric'
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&` +
  `units=${scale}&APPID=${idApi}&cnt=40`
  
  axios.get(url)
    .then(response => response.data.list)
    .then(forecasts => dispatch({
      type: FETCH_FORECASTS,
      payload: forecasts
    }))
    .catch(error => console.log(error.response.data.message))
}

export const handleIsFahrenheit = isFahrenheit => dispatch => {
  dispatch({
    type: TOGGLE_SCALE,
    payload: isFahrenheit
  })
}