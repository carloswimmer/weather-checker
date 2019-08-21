import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    margin: 'auto'
  },
  media: {
    height: 120,
    backgroundColor: '#3f51b5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF8F00'
  },
});

export default function DayCard(props) {
  const classes = useStyles();

  const Temperature = () => {
    if (props.fahrenheit) {
      return (
        <Typography variant="h2">
          {props.temp}°F
        </Typography>
      )
    }
    return (
      <Typography variant="h2">
        {props.temp}°C
      </Typography>
    )
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <Temperature/>
        </CardMedia>
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5"
          >
            {props.date}
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
        >
          Forecast Details
        </Button>
      </CardActions>
    </Card>
  );
}
