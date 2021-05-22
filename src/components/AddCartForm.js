import { InputLabel,Input,Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react'

export const AddCartForm = (props)=>{
    const tax =1.1
    const [num,setNum] = useState(1)
    const [error,setError] = useState('')
    const checkNum =(a) =>{
        if(a<=0){
            setError('1個以下の値は入力できません')
        }else{
            setNum(a)
            setError('')
        }
    }
    return (
        <div>
            <h2>小計：{Math.floor(props.price*num*tax)}円(税込)</h2>
            <span>{error}</span>
            <InputLabel htmlFor="num">個数</InputLabel>
            <Input id="num" type="number" onChange={(e)=>checkNum(e.target.value)} value={num}/>
            <Button variant="outlined">追加</Button>
        </div>
    )
}