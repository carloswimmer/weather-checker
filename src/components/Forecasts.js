import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TimeController from './TimeController'
import ChartRow from './ChartRow'
import CardRow from './CardRow'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '64px',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  }
}))

export default function Forecasts() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container 
          fixed 
          maxWidth="lg" 
          className={classes.container}
        >
        <div className={classes.root}>
          <Grid 
            container 
            justify="center"
          >
            <Hidden smDown>
              <Grid 
                container
                item 
                sm={2} 
                spacing={3}
                justify="center"
                alignItems="center"
              >
                <TimeController increment={false}/>
              </Grid>
            </Hidden>
            <Grid 
              container 
              item 
              md={8}
              sm={12} 
              spacing={3}
              justify="center"
            >
              <Hidden mdUp>
                <Grid 
                  container
                  item 
                  xs={6} 
                  spacing={3}
                  justify="flex-start"
                  alignItems="center"
                >
                  <TimeController increment={false}/>
                </Grid>
                <Grid 
                  container
                  item 
                  xs={6} 
                  spacing={3}
                  justify="flex-end"
                  alignItems="center"
                >
                  <TimeController increment={true}/>
                </Grid>
              </Hidden>
              <CardRow />
              <ChartRow />
            </Grid>
            <Hidden smDown>
              <Grid 
                container 
                item
                sm={2} 
                spacing={3}
                justify="center"
                alignItems="center"
              >
                <TimeController increment={true}/>
              </Grid>
            </Hidden>
          </Grid>
        </div>
        </Container>
      </React.Fragment>
    </div>
  )
}
