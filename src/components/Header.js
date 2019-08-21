import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { ReactComponent as Logo } from '../assets/WeatherLogo.svg'
import ScaleSwitcher from './ScaleSwitcher'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  nameBold: {
    fontWeight: 900,
    color: '#FF8F00'
  }
})

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <Logo />
          <Typography 
            variant="h5" 
            color="inherit" 
            className={classes.title}
          >
            &nbsp;WEATHER&nbsp;
            <span className={classes.nameBold}>
              CHECKER
            </span>
          </Typography>
          <ScaleSwitcher />
        </Toolbar>
      </AppBar>
    </div>
  )
}

