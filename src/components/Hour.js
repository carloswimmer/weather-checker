import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Hour(props) {
  const callIcon = () => {
    return `http://openweathermap.org/img/wn/${props.icon}.png`
  }

  const Temperature = () => {
    if (props.fahrenheit) {
      return (
        <Typography variant="body2">
        { Math.round(props.temp) }°F
      </Typography>
      )
    }
    return (
      <Typography variant="body2">
        { Math.round(props.temp) }°C
      </Typography>
    )
  }

  const barStyle = () => {
    let height = props.fahrenheit ? props.temp*0.6 : props.temp*2
    return {
      height: `${height}%`,
      width: '44px',
      backgroundImage: 'linear-gradient(#FF8F00, #FFFFFF)',
      borderRadius: '3px',
      margin: '15px 0'
    }
  }

  const containerStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '33vh',
    }
  }

  return (
    <div style={containerStyle()}>
      <img src={callIcon()} alt="forecast icon"/>
      <Temperature/>
      <div style={barStyle()}></div>
      <Typography variant="body2">
        { props.hour }
      </Typography>
    </div>
  )
}
