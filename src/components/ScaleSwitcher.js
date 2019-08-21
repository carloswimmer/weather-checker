import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { handleIsFahrenheit } from '../actions/forecastActions'
import { fetchForecasts } from '../actions/forecastActions'
import { Hidden } from '@material-ui/core'

class ScaleSwitcher extends Component { 
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
        <Hidden xsDown>
          <Typography 
            variant="h6" 
            color="inherit" 
            style={this.textStyle()}
          >
            CELSIUS
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography 
            variant="h6" 
            color="inherit" 
            style={this.textStyle()}
          >
            °C
          </Typography>
        </Hidden>
        <OrangeSwitch
          checked={isFahrenheit}
          onChange={(event) => this.toggleScale(event)}
          inputProps={{ 'aria-label': 'scale checkbox' }}
        />
        <Hidden smUp>
          <Typography 
            variant="h6" 
            color="inherit" 
            style={this.textStyle()}
          >
            °F
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography 
            variant="h6" 
            color="inherit" 
            style={this.textStyle()}
          >
            FAHRENHEIT
          </Typography>
        </Hidden>
        
      </div>
    )
  }
}

ScaleSwitcher.propTypes = {
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

export default connect (mapStateToProps, { handleIsFahrenheit, fetchForecasts })(ScaleSwitcher)