import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { InputLabel,Input} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import firebase from 'firebase'

export const Login = ()=> {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLink = path=>history.push(path)
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const doLogin = ()=>{
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((userdata) => {
          dispatch(login(userdata))
        }).then(()=>{
          handleLink('/')
        })
      })
    }
    return (
      <React.Fragment>
          <h1>ログイン</h1>
          <div>
              <InputLabel htmlFor="email">メールアドレス</InputLabel>
              <Input id="email" type="text" onChange={((e)=>setEmail(e.target.value))}/>
          </div>
          <div>
              <InputLabel htmlFor="password">パスワード</InputLabel>
              <Input id="password" type="text" onChange={((e)=>setPassword(e.target.value))}/>
          </div>
          <Button variant="contained" color="primary" onClick={doLogin}>追加</Button>
          <div>
            <Link to='/register'>ユーザー登録はこちら</Link>
          </div>
      </React.Fragment>
    )
}