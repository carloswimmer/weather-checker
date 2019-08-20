import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchForecasts } from '../actions/forecastActions'
import Header from './Header'
import Loader from './Loader'
import Background from './Background'
import Forecasts from './Forecasts'

class Content extends Component {
  componentDidMount() {
    this.props.fetchForecasts(this.props.isFahrenheit)
  }

  render() {
    let { isLoading } = this.props

    const checkLoad = loading => {
      if (loading) {
        return (
          <div>
            <Header />
            <Loader />
          </div>
        )
      }
      return (
        <div>
          <Background />
          <Header />
          <Forecasts />
        </div>
      )
    }

    return (
      <div>
        { checkLoad(isLoading) }
      </div>
    )
  }
}

Content.propTypes = {
  fetchForecasts: PropTypes.func.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isFahrenheit: state.forecasts.isFahrenheit,
  isLoading: state.forecasts.isLoading
})

export default connect(mapStateToProps, { fetchForecasts })(Content)