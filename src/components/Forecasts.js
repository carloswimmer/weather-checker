import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchForecasts } from '../actions/forecastActions'

class Forecasts extends Component {
  componentDidMount() {
    this.props.fetchForecasts(this.props.forecasts.isCelsius)
  }

  render() {
    const forecastItems = this.props.forecasts.items.map(item => (
      <div key={item.dt}>
        <h3>Temperature:</h3>
        <p>{item.main.temp}</p>
      </div>
    ))
    return (
      <div>
        <h1>Forecasts</h1>
        {forecastItems}
      </div>
    )
  }
}

Forecasts.propTypes = {
  fetchForecasts: PropTypes.func.isRequired,
  forecasts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect(mapStateToProps, { fetchForecasts })(Forecasts)