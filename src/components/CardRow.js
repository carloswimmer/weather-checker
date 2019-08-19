import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import DayCard from './DayCard'

class CardRow extends Component {
  
  setDates(days, number) {
    let array = [].concat(days)
    if (array[0]) return array[number].date
    return
  }

  

  render() {
    return (
      <React.Fragment>
        <Grid item sm={4}>
          <DayCard 
            date={this.setDates(this.props.days, 0)}
            temp="18°C"
          />
        </Grid>
        <Grid item sm={4}>
          <DayCard 
            date={this.setDates(this.props.days, 1)}
            temp="18°C"
          />
        </Grid>
        <Grid item sm={4}>
          <DayCard 
            date={this.setDates(this.props.days, 2)}
            temp="18°C"
          />
        </Grid>
      </React.Fragment>
    )
  }
}

CardRow.propTypes = {
  days: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  days: state.forecasts.days,
})

export default connect(mapStateToProps, { })(CardRow)