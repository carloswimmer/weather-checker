import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  base: {
    backgroundColor: 'silver',
    width: '100vw',
    height: '100vh'
  },
  container: {
    marginTop: '64px',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#aaaaaa',
    borderRadius: '50%',
    height:'56px',
    width: '56px'
  },
  card: {
    backgroundColor: '#aaaaaa',
    borderRadius: '5px',
    maxWidth: 345,
    height: 250
  },
  chart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaaa',
    borderRadius: '5px',
    height: '35vh',
    color: '#666666',
  }
}))

export default function Loader() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.base}>
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
                </Grid>
                <Grid 
                  container 
                  item 
                  sm={8} 
                  spacing={3}
                >
                  <Grid item sm={4}>
                    <div className={classes.card}></div>
                  </Grid>
                  <Grid item sm={4}>
                    <div className={classes.card}></div>
                  </Grid>
                  <Grid item sm={4}>
                    <div className={classes.card}></div>
                  </Grid>
                  <Grid item sm={12}>
                    <div className={classes.chart}>
                      <Typography variant="h2">
                        Loading...
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  item
                  sm={2} 
                  spacing={3}
                  justify="center"
                  alignItems="center"
                >
                  <div className={classes.button}></div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </React.Fragment>
    </div>
  )
}
