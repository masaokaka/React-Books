import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {AddCartForm} from '../components/AddCartForm';



export const ItemInfo = ()=> {
  const {id} = useParams()
  const items = useSelector(state=>state.items)
  const [item,setItem] = useState('')

  useEffect(() => {
      let itemInfo = items.filter((item)=>{
        return item.id === parseInt(id)
      })
      setItem(itemInfo[0])
  },[id])
  
  return (
      <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={4}>
          <Grid container justify="center">
            <img src={item.img} width="300px" height="300px"/>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="center" direction="column">
            <Grid><h2>{item.name}</h2></Grid>
            <Grid><p>{item.text}</p></Grid>
            <Grid><h3>{item.price}円(税抜)</h3></Grid>
          </Grid>
        </Grid>
        <AddCartForm id={item.id} price={item.price}></AddCartForm>
      </Grid>
      </div>
  );
}