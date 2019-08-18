import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
}))

export default function Button(props) {
  const classes = useStyles()
  let next = props.direction

  return (
    <div>
      <Fab color="primary" aria-label="next" className={classes.fab}>
        {next ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </Fab>
    </div>
  )
}