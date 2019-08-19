import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import DayCard from './DayCard'

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
  

  render() {
    return (
      <React.Fragment>
        <Grid item sm={4}>
          <DayCard 
            date={this.getDates(this.props.days, 0)}
            temp={this.getTemperature(this.props.days, 0)}
            fahrenheit={this.props.isFahrenheit}
          />
        </Grid>
        <Grid item sm={4}>
          <DayCard 
            date={this.getDates(this.props.days, 1)}
            temp={this.getTemperature(this.props.days, 1)}
            fahrenheit={this.props.isFahrenheit}
          />
        </Grid>
        <Grid item sm={4}>
          <DayCard 
            date={this.getDates(this.props.days, 2)}
            temp={this.getTemperature(this.props.days, 2)}
            fahrenheit={this.props.isFahrenheit}
          />
        </Grid>
      </React.Fragment>
    )
  }
}

CardRow.propTypes = {
  days: PropTypes.array.isRequired,
  isFahrenheit: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  days: state.forecasts.days,
  isFahrenheit: state.forecasts.isFahrenheit
})

export default connect(mapStateToProps, { })(CardRow)