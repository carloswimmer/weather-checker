import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Rain from '../assets/rain.jpg'
import Clouds from '../assets/clouds.jpg'
import Clear from '../assets/clear.jpg'

class Background extends Component {

  backgroundSwitcher() {
    
  }
  
  backgroundStyle(props) {
    let Image

    switch (props) {
      case 'Rain':
        Image = Rain
        break
    
      case 'Clouds':
        Image = Clouds
        break

      case 'Clear':
        Image = Clear
        break
        
      default:
        break
    }

    return {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,
      opacity: 0.6,
      filter: 'blur(5px)'
    }
  }

  render() {
    let { dayDescription } = this.props

    return (
      <div style={this.backgroundStyle(dayDescription)}>
      </div>
    )
  }
}

Background.propTypes = {
  dayDescription: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  dayDescription: state.forecasts.dayDescription
})

export default connect(mapStateToProps, { })(Background)