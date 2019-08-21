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

  getDescription(days, number) {
    let array = [].concat(days)
    if (array[number]) return array[number].averageDescription
    return
  }

  render() {
    let { days, dayCards, isFahrenheit, changeDetails } = this.props
    return (
      <React.Fragment>
        <Grid item sm={4} xs={12}>
          <div onClick={() => changeDetails(days, dayCards[0])}>
            <DayCard 
              date={this.getDates(days, dayCards[0])}
              temp={this.getTemperature(days, dayCards[0])}
              fahrenheit={isFahrenheit}
              description={this.getDescription(days, dayCards[0])}
            />
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div onClick={() => changeDetails(days, dayCards[1])}>
            <DayCard 
              date={this.getDates(days, dayCards[1])}
              temp={this.getTemperature(days, dayCards[1])}
              fahrenheit={isFahrenheit}
              description={this.getDescription(days, dayCards[1])}
            />
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div onClick={() => changeDetails(days, dayCards[2])}>
            <DayCard 
              date={this.getDates(days, dayCards[2])}
              temp={this.getTemperature(days, dayCards[2])}
              fahrenheit={isFahrenheit}
              description={this.getDescription(days, dayCards[2])}
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