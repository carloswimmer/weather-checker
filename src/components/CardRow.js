import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import DayCard from './DayCard'
import { changeDetails } from '../actions/forecastActions'

class CardRow extends Component {
  
  getDates(days, number) {
    let array = [].concat(days)
    if (array[number]) return array[number].date
    return
  }

  getTemperature(days, number) {
    let array = [].concat(days)
    if (array[number]) return array[number].averageTemp
    return
  }
  
  setDetails(days, number) {
    let array = [].concat(days)
    if (array[number]) {
      const measures = array[number].measures
      const date = this.getDates(days, number)
      this.props.changeDetails(measures, date)
    }  
  }

  render() {
    let { days, dayCards, isFahrenheit } = this.props
    return (
      <React.Fragment>
        <Grid item sm={4}>
          <div onClick={() => this.setDetails(days, dayCards[0])}>
            <DayCard 
              date={this.getDates(days, dayCards[0])}
              temp={this.getTemperature(days, dayCards[0])}
              fahrenheit={isFahrenheit}
            />
          </div>
        </Grid>
        <Grid item sm={4}>
          <div onClick={() => this.setDetails(days, dayCards[1])}>
            <DayCard 
              date={this.getDates(days, dayCards[1])}
              temp={this.getTemperature(days, dayCards[1])}
              fahrenheit={isFahrenheit}
            />
          </div>
        </Grid>
        <Grid item sm={4}>
          <div onClick={() => this.setDetails(days, dayCards[2])}>
            <DayCard 
              date={this.getDates(days, dayCards[2])}
              temp={this.getTemperature(days, dayCards[2])}
              fahrenheit={isFahrenheit}
            />
          </div>
        </Grid>
      </React.Fragment>
    )
  }
}

CardRow.propTypes = {
  changeDetails: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
  dayCards: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  days: state.forecasts.days,
  isFahrenheit: state.forecasts.isFahrenheit,
  dayCards: state.forecasts.dayCards
})

export default connect(mapStateToProps, { changeDetails })(CardRow)