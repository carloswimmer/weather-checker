import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
          <CSSTransition
            in={loading}
            appear={true}
            timeout={600}
            classNames="fade"
          >
          <div>
            <Header />
            <Loader />
          </div>
          </CSSTransition>
        )
      }
      return (
        <div>
          <Header />
          <Background />
          <Forecasts />
        </div>
      )
    }

    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={isLoading}
            timeout={600}
            classNames="fade"
          >
            {checkLoad(isLoading)}
          </CSSTransition>
        </TransitionGroup>
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