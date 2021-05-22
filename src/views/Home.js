import React from 'react';
import Box from '@material-ui/core/Box';
import {useSelector} from 'react-redux'
import {Item} from '../components/Item'

export const Home = ()=> {
  const items = useSelector(state=>state.items)
  return (
      <React.Fragment>
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
        {items.map((item,index) => (
          <Item key={index}
          id={item.id}
          name={item.name}
          text={item.text}
          price={item.price}
          subPrice={item.subPrice}
          img={item.img}
          />
        ))}
        </Box>
      </React.Fragment>
  );
}