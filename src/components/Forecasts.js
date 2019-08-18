import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TimeController from './TimeController'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '64px',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperSmall: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '38vh'
  },
}))

export default function Forecasts() {
  const classes = useStyles();

  function CardRow() {
    return (
      <React.Fragment>
        <Grid item sm={4}>
          <Paper className={classes.paperSmall}>item</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paperSmall}>item</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paperSmall}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function ChartRow() {
    return (
      <React.Fragment>
        <Grid item sm={12}>
          <Paper className={classes.paperSmall}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

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
            <Grid 
              container 
              item 
              sm={8} 
              spacing={3}
            >
              <CardRow />
              <ChartRow />
            </Grid>
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
          </Grid>
        </div>
        </Container>
      </React.Fragment>
    </div>
  )
}
