import React from 'react'

  
  //checkboxコンポーネント
  const CheckBox = ({id, value, checked, onChange}) => {
    return (
      <input
        id={id}
        type="checkbox"
        name="toppings"
        checked={checked}
        onChange={onChange}
        value={value}
      />
    )
  }
  
  export const ToppingsCheckBox = (props) => {
    //元のデータをとってくる
    const handleChange = e => {
        let id = parseInt(e.target.value)
        let arr = [...props.toppings] 
        arr.forEach((topping)=>{
            if(topping.id===id){
                topping.checked = !topping.checked
            }
        })
      props.setToppings(arr)
    }
    return (
        <form>
          {props.toppings.map((topping, index) => {
            return (
              <label htmlFor={topping.id} key={index}>
                <CheckBox
                  id={topping.id}
                  value={topping.id}
                  onChange={handleChange}
                  checked={topping.checked}
                />
                {topping.name}
              </label>
            )
          })}
        </form>
    )
  }
  