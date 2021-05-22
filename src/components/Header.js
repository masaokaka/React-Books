import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {sideNav} from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ()=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
      <IconButton onClick={(()=>dispatch(sideNav()))} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        CurryApp
      </Typography>
      <Button color="inherit">ログイン</Button>
    </Toolbar>
  </AppBar>
  </div>
  );
}
  