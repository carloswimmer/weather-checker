import Forecast from '../model/Forecast'
import Measure from '../model/Measure'

export const forecastsController = forecasts => {
  const simplifiedList = simplify(forecasts)
  const groupedList = groupByDay(simplifiedList)
  setAverageTemp(groupedList)
  setAverageDescription(groupedList)

  return groupedList
}

export const simplify = array => {
  let forecasts = []

  array.forEach(item => {
    let measure = new Measure(
      item.dt_txt.substr(11, 5),
      item.main.temp,
      item.weather[0].icon,
      item.wind.speed,
      item.weather[0].main
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

export const dateFormatter = date => {
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
  let group = new Forecast(groupMonthDay, groupDate, [], 0)
  let groupedArray = []
  let number = 0

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
    temps = groupBy(item.measures, 'mainTemp')
    total = temps.reduce((prev, curr) => prev + curr)
    if (temps.length) floatAverage = total / temps.length
    item.averageTemp = Math.round(floatAverage)
  })
}

const groupBy = (array, prop) => {
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

const setAverageDescription = array => {
  let descriptions = []
  array.forEach(item => {
    descriptions = groupBy(item.measures, 'mainDescription')
    const rains = {name: 'Rain', count: counter(descriptions, 'Rain')}
    const clouds = {name: 'Clouds', count: counter(descriptions, 'Clouds')}
    const clears = {name: 'Clear', count: counter(descriptions, 'Clear')}
    const sorter = [rains, clouds, clears]
    const sorted = sorter.sort((a, b) => b.count - a.count)
    item.averageDescription = sorted[0].name
  })
}

const counter = (array, prop) => {
  return array.filter(item => item === prop).length
}