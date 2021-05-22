import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {login,logout} from './actions'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import firebase from 'firebase'

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {SideNav} from './components/SideNav'

import {Home} from './views/Home'
import {Register} from './views/Register'
import {Login} from './views/Login'
import {Cart} from './views/Cart'
import {Order} from './views/Order'
import {OrderComp} from './views/OrderComp'
import {ItemInfo} from './views/ItemInfo'

import Container from '@material-ui/core/Container'

const App = ()=> {
  const dispatch = useDispatch()
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        dispatch(login(user))
      }else{
        dispatch(logout())
      }
    })
  },[])
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <SideNav/>
        <Container>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/cart' exact component={Cart}/>
            <Route path='/order' exact component={Order}/>
            <Route path='/ordercomp' exact component={OrderComp}/>
            <Route path='/iteminfo/:id' exact component={ItemInfo}/>
          </Switch>
        </Container>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
