import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Hour from './Hour'

class Details extends Component {
  
  chartStyle() {
    return {
      minHeight: '33vh',
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
          fahrenheit={this.props.isFahrenheit}
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
  measures: PropTypes.array.isRequired,
  isFahrenheit: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  measures: state.forecasts.measures,
  isFahrenheit: state.forecasts.isFahrenheit
})

export default connect(mapStateToProps, { })(Details)