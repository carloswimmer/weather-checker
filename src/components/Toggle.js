import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleIsCelsius } from '../actions/forecastActions'
import { fetchForecasts } from '../actions/forecastActions'

class Toggle extends Component {
  toggleScale () {
    this.props.toggleIsCelsius(this.props.forecasts.isCelsius)
    process.nextTick(() => {
      this.props.fetchForecasts(this.props.forecasts.isCelsius)
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleScale()}>CHANGE</button>
        <h3>{this.props.forecasts.isCelsius ? 'Celsius' : 'Fahrenheit'}</h3>
      </div>
    )
  }
}

Toggle.propTypes = {
  toggleIsCelsius: PropTypes.func.isRequired,
  fetchForecasts: PropTypes.func.isRequired,
  forecasts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect (mapStateToProps, { toggleIsCelsius, fetchForecasts })(Toggle)