import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';
import Details from './Details'

class ChartRow extends Component {

  paperStyle() {
    return {
      padding: '12px',
      textAlign: 'center'
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper 
            component={'div'} 
            style={this.paperStyle()}
          >
            <Typography
              variant="subtitle1"
            >
              {this.props.detailsDate}
            </Typography>
            <Details />
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }
}

ChartRow.propTypes = {
  detailsDate: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  detailsDate: state.forecasts.detailsDate,
})

export default connect(mapStateToProps, { })(ChartRow)