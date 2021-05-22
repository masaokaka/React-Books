import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions';
import { InputLabel,Input} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router';
import firebase from 'firebase'

export const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLink = path=>history.push(path)
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const doRegister = ()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res)=>{
            res.user.updateProfile({
                displayName:name
            }).then(()=>{
                let user = firebase.auth().currentUser
                dispatch(register(user))
            }).then(()=>{
                handleLink('/')
            })
        })
    }

  return (
    <React.Fragment>
        <h1>ユーザー登録</h1>
        <div>
            <InputLabel htmlFor="name">ユーザー名</InputLabel>
            <Input id="name" type="text" onChange={((e)=>setName(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="email">メールアドレス</InputLabel>
            <Input id="email" type="text" onChange={((e)=>setEmail(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="password">パスワード</InputLabel>
            <Input id="password" type="text" onChange={((e)=>setPassword(e.target.value))}/>
        </div>
        <Button variant="contained" color="primary" onClick={doRegister}>追加</Button>
    </React.Fragment>
  );  
}