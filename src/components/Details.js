import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchForecasts } from '../actions/forecastActions'
import Hour from './Hour'

class Details extends Component {
  componentDidMount() {
    this.props.fetchForecasts(this.props.isFahrenheit)
  }

  chartStyle() {
    return {
      minHeight: '40vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    }
  }

  groupWrapper() {
    return {
      height: '100%'
    }
  }

  render() {
    const forecastHours = this.props.measures.map(measure => (
      <div 
        key={measure.hour}
        style={this.groupWrapper()}
      >
        <Hour 
          hour={measure.hour} 
          icon={measure.weatherIcon} 
          temp={measure.mainTemp} 
        />
      </div>
    ))
    return (
      <React.Fragment>
        <div style={this.chartStyle()}>
          {forecastHours}
        </div>
      </React.Fragment> 
    )
  }
}

Details.propTypes = {
  fetchForecasts: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
  measures: PropTypes.array.isRequired,
  isFahrenheit: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  days: state.forecasts.days,
  measures: state.forecasts.measures,
  isFahrenheit: state.forecasts.isFahrenheit
})

export default connect(mapStateToProps, { fetchForecasts })(Details)