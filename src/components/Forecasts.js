import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCelsiusForecasts } from '../actions/forecastActions'

class Forecasts extends Component {
  componentDidMount() {
    this.props.fetchCelsiusForecasts()
  }

  render() {
    const forecastItems = this.props.forecasts.map(item => (
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
  fetchCelsiusForecasts: PropTypes.func.isRequired,
  forecasts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  forecasts: state.celsiusForecasts.items
})

export default connect(mapStateToProps, { fetchCelsiusForecasts })(Forecasts)