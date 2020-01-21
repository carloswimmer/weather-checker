import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Rain from '../assets/rain.jpg'
import Clouds from '../assets/clouds.jpg'
import Clear from '../assets/clear.jpg'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Background extends Component {

  backgroundDay(props) {
    switch (props) {
      case 'Rain':
        return (<div style={this.backgroundStyle(Rain)}></div>)

      case 'Clouds':
        return (<div style={this.backgroundStyle(Clouds)}></div>)

      case 'Clear':
        return (<div style={this.backgroundStyle(Clear)}></div>)

      default:
        break
    }
  }

  backgroundStyle(image) {
    return {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,
      opacity: 0.6,
      filter: 'blur(5px)'
    }
  }

  render() {
    let { dayDescription, detailsDate } = this.props

    return (
      <TransitionGroup>
        <CSSTransition
          key={detailsDate}
          timeout={600}
          classNames="fade-bg"
        >
          {this.backgroundDay(dayDescription)}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

Background.propTypes = {
  dayDescription: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  dayDescription: state.forecasts.dayDescription,
  detailsDate: state.forecasts.detailsDate
})

export default connect(mapStateToProps, {})(Background)