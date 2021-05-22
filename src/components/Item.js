import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    height:300,
    margin:10
  },
  media: {
    height: 140,
  },
});

export const Item = (props)=> {
  const classes = useStyles();
  const history = useHistory();
  const handleLink = path => history.push(path);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>handleLink(`iteminfo/${props.id}`)}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
            {props.price}円(税抜)
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">カート</Button>
        <Button color="primary">お気に入り</Button>
      </CardActions>
    </Card>
  );
}
