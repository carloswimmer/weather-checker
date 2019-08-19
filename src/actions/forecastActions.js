import axios from 'axios'
import { idApi } from '../env'
import { FETCH_FORECASTS } from './types'
import { TOGGLE_SCALE } from './types'
import { CHANGE_DAYS } from './types'
import { CHANGE_DETAILS } from './types'
import { forecastsController } from './forecastsController'

let dayCards = []

export const fetchForecasts = isFahrenheit => dispatch => {
  let scale = isFahrenheit ? 'imperial' : 'metric'
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&` +
  `units=${scale}&APPID=${idApi}&cnt=40`
  
  axios.get(url)
    .then(response => response.data.list)
    .then(forecasts => {
      let simplified = forecastsController(forecasts)

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

export const changeDays = increment => dispatch => {
  if (dayCards.length === 0) dayCards = [0, 1, 2]
  let newDayCards = increment ? dayCards.map(item => item + 1) : dayCards.map(item => item - 1)
  dayCards = newDayCards

  dispatch({
    type: CHANGE_DAYS,
    payload: newDayCards
  })
}

export const changeDetails = measures => dispatch => {
  dispatch({
    type: CHANGE_DETAILS,
    payload: measures
  })
}