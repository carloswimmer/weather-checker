import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchForecasts } from '../actions/forecastActions'

class Details extends Component {
  componentDidMount() {
    this.props.fetchForecasts(this.props.forecasts.isFahrenheit)
  }

  render() {
    const forecastItems = this.props.forecasts.items.map(item => (
      <div key={item.dt}>
        <h3>Temperature:</h3>
        <p>{item.main.temp}</p>
      </div>
    ))
    return (
      <React.Fragment>
        <Typography>
          <h1>Forecasts</h1>
          {forecastItems}
        </Typography>
      </React.Fragment> 
    )
  }
}

Details.propTypes = {
  fetchForecasts: PropTypes.func.isRequired,
  forecasts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect(mapStateToProps, { fetchForecasts })(Details)