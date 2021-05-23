import React from 'react';
import firebase from 'firebase'
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {sideNav,logout} from '../actions';
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
  header:{
    padding: theme.spacing(1, 1),
    backgroundColor:'orange'
  }
}));

const Header = ()=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.loginstatus)
  const history = useHistory();
  const handleLink = path => history.push(path);

  const doLogout = () =>{
    firebase.auth().signOut().then(()=>{
      dispatch(logout())
    })
    handleLink('/')
  }

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.header}>
    <Toolbar>
      <IconButton onClick={(()=>dispatch(sideNav()))} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        CurryApp
      </Typography>
      <div>
        { user ?
        <div>
          <span>ようこそ {user.displayName} さん</span>
          <Button variant="contained" onClick={()=>handleLink('/cart')}>カート</Button>
          <Button variant="contained" onClick={()=>handleLink('/orderhistory')}>注文履歴</Button>
          <Button variant="contained" onClick={doLogout}>ログアウト</Button>
        </div>
        :
        <div>
          <Button variant="contained" onClick={()=>handleLink('/cart')}>カート</Button>
          <Button variant="contained" onClick={()=>handleLink('/login')}>ログイン</Button>
        </div>
        }
      </div>
    </Toolbar>
  </AppBar>
  </div>
  );
}

export default Header;