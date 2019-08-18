import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { handleIsFahrenheit } from '../actions/forecastActions'
import { fetchForecasts } from '../actions/forecastActions'

class Switch extends Component { 
  toggleScale (event) {
    let result = event.target.checked
    let { handleIsFahrenheit, fetchForecasts } = this.props

    handleIsFahrenheit(result)
    fetchForecasts(result)
  }

  textStyle = () => {
    return {
      fontWeight: '400',
    }
  }

  containerStyle = () => {
    return {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }

  render() {
    let { forecasts: { isFahrenheit } } = this.props

    return (
      <div style={this.containerStyle()}>
        <Typography 
          variant="h6" 
          color="inherit" 
          style={this.textStyle()}
        >
          CELSIUS
        </Typography>
        <OrangeSwitch
          checked={isFahrenheit}
          onChange={(event) => this.toggleScale(event)}
          inputProps={{ 'aria-label': 'scale checkbox' }}
        />
        <Typography 
          variant="h6" 
          color="inherit" 
          style={this.textStyle()}
        >
          FAHRENHEIT
        </Typography>
      </div>
    )
  }
}

Switch.propTypes = {
  handleIsFahrenheit: PropTypes.func.isRequired,
  fetchForecasts: PropTypes.func.isRequired,
  forecasts: PropTypes.object.isRequired
}

const OrangeSwitch = withStyles({
  switchBase: {
    color: '#FF8F00',
    '&$checked': {
      color: '#FF8F00',
    },
    '&$checked + $track': {
      backgroundColor: '#FF8F00',
    },
  },
  checked: {},
  track: {},
})(Switch);

const mapStateToProps = state => ({
  forecasts: state.forecasts
})

export default connect (mapStateToProps, { handleIsFahrenheit, fetchForecasts })(Switch)