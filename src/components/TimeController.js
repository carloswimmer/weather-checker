import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { connect } from 'react-redux'
import { changeDays } from '../actions/forecastActions'

class TimeController extends Component {
  render() {
    let {increment, dayCards, days} = this.props
    
    if (dayCards[0] === 0 && !increment) return null
    if (dayCards[2] === days.length-1 && increment) return null
    return (
      <div onClick={() => this.props.changeDays(increment)}>
        <Button 
          direction={increment}
        />
      </div>
    )
  }
}

TimeController.propTypes = {
  changeDays: PropTypes.func.isRequired,
  increment: PropTypes.bool.isRequired,
  dayCards: PropTypes.array.isRequired,
  days: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  dayCards: state.forecasts.dayCards,
  days: state.forecasts.days
})

export default connect (mapStateToProps, { changeDays })(TimeController)