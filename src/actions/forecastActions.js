import axios from 'axios'
import { idApi } from '../env'
import { FETCH_FORECASTS } from './types'
import { TOGGLE_SCALE } from './types'
import { MOUNT_DAY } from './types'
import { forecastsController } from './forecastsController'

let simplified = []

export const fetchForecasts = isFahrenheit => dispatch => {
  let scale = isFahrenheit ? 'imperial' : 'metric'
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&` +
  `units=${scale}&APPID=${idApi}&cnt=40`
  
  axios.get(url)
    .then(response => response.data.list)
    .then(forecasts => {
      simplified = forecastsController(forecasts)

      dispatch({
        type: FETCH_FORECASTS,
        payload: simplified
      })
    })
    .catch(error => console.log(error.response))
}

export const handleIsFahrenheit = isFahrenheit => dispatch => {
  dispatch({
    type: TOGGLE_SCALE,
    payload: isFahrenheit
  })
}

export const mountDay = simplified => dispatch => {
  console.log(simplified)
  dispatch({
    type: MOUNT_DAY,
    payload: simplified
  })
}