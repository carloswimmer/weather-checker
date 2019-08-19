import Forecast from '../model/Forecast'
import Measure from '../model/Measure'

export const forecastsController = forecasts => {
  const simplifiedList = simplify(forecasts)
  const groupedList = groupByDay(simplifiedList)
  setAverageTemp(groupedList)

  return groupedList
}

const simplify = array => {
  let forecasts = []

  array.forEach(item => {
    let measure = new Measure(
      item.dt_txt.substr(11, 5),
      item.main.temp,
      item.weather[0].icon,
      item.wind.speed
    )
    let forecast = new Forecast(
      item.dt_txt.substr(8, 2),
      dateFormatter(item.dt_txt),
      [].concat(measure)
    )
    forecasts.push(forecast)
  })

  return forecasts
}

const dateFormatter = date => {
  const complete = new Date(date)
  const day = complete.getDate()
  const monthNumber = complete.getMonth()
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = monthNames[monthNumber]
  const year = complete.getFullYear()
  const dateFormatted = `${day} ${month} ${year}`

  return dateFormatted
}

const groupByDay = array => {
  let groupMonthDay = array[0].monthDay
  let groupDate = array[0].date
  let group = new Forecast(groupMonthDay, groupDate, [], 1)
  let groupedArray = []
  let number = 1

  groupedArray.push(group)
  array.forEach(item => {
    if (item.monthDay === groupMonthDay) {
      group.measures.push(item.measures[0])
      return
    }
    number ++
    group = item
    group.number = number
    groupedArray.push(group)
    groupMonthDay = group.monthDay
    return
  })
 
  return groupedArray
}

const setAverageTemp = array => {
  let temps = []
  let total = {}
  let floatAverage = 0
  array.forEach(item => {
    temps = groupByTemp(item.measures, 'mainTemp', 'mainTemp')
    total = temps.reduce((prev, curr) => prev + curr)
    if (temps.length) floatAverage = total / temps.length
    item.averageTemp = Math.round(floatAverage)
  })
}

const groupByTemp = (array, prop, sum) => {
  let grouped = []
  let value = 0
  array.forEach(element => {
      if (!grouped.find(item => item[prop] === element[prop])) {
          value = element[prop]
          grouped.push(value)
      }
  })
  
  return grouped
}