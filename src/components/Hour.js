import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Hour(props) {
  const callIcon = () => {
    return `http://openweathermap.org/img/wn/${props.icon}.png`
  }

  const barStyle = () => {
    return {
      height: `${props.temp*2}%`,
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
      height: '38vh',
      width: '44px',
    }
  }

  return (
    <div style={containerStyle()}>
      <img src={callIcon()} alt="forecast icon"/>
      <Typography variant="body2">
        { Math.round(props.temp) }°C
      </Typography>
      <div style={barStyle()}></div>
      <Typography variant="body2">
        { props.hour }
      </Typography>
    </div>
  )
}
