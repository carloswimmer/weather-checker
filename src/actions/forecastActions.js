import axios from 'axios'
import { FETCH_CELSIUS_FORECASTS } from './types'

export const fetchCelsiusForecasts = () => dispatch => {
  const id = '75f972b80e26f14fe6c920aa6a85ad57'
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&` +
  `units=metric&APPID=${id}&cnt=40`
  
  axios.get(url)
    .then(response => response.data.list)
    .then(forecasts => dispatch({
      type: FETCH_CELSIUS_FORECASTS,
      payload: forecasts
    }))
    .catch(error => console.log(error.response.data.message))
}