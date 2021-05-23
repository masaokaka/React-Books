import { Input,Button,FormLabel,FormControlLabel,Radio,RadioGroup } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {ToppingsCheckBox} from '../components/ToppingsCheckBox'
import firebase from 'firebase'
import {addcart,updatecart} from '../actions' 


export const AddCartForm = (props)=>{
    const [num,setNum] = useState(1)
    const [total,setTotal] = useState()
    const [size,setSize] = useState('0')
    const toppings = useSelector(state=>state.toppings)
    const user = useSelector(state=>state.loginstatus)
    const cart = useSelector(state=>state.cart.itemInfo)//配列
    const dispatch = useDispatch()
    const {id} = useParams()
    const [checkedToppings, setCheckedToppings] = useState([...toppings])
    const checkNum =(a) =>{
        if(a<=0){
            return
        }else{
            setNum(a)
        }
    }

    //ランダムID生成処理
    const createRandomId = ()=>{
        let strong = 1000;
        return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
    }
    //トッピング数カウント処理
    const countToppings = ()=>{
        let count = 0
        checkedToppings.forEach(toppings=>{
            if(toppings.checked){
                count++
            }
        })
        return count
    }
    //小計の計算処理
    useEffect(() => {
        let totalPrice = 0
        if(size === '0'){
            let toppingPrice = countToppings()*200
            totalPrice = Math.floor(props.item.price*num+toppingPrice)
        }else if(size === '1'){
            let toppingPrice = countToppings()*300
            totalPrice = Math.floor(props.item.subPrice*num+toppingPrice)
        }
        setTotal(totalPrice)
    })

    //カートへの追加処理
    const doAddcart = ()=>{
        console.log('a')
        //追加予定のアイテムを変数に格納
        let toppings = []
        checkedToppings.forEach(topping=>{
            if(topping.checked === true){
                toppings.push(topping.id)
            }
        })
        if(user!==null){
            //アプデ処理
            if(cart){
                let itemInfo = [
                    ...cart,
                    {
                        itemId:id,
                        size:size,
                        toppings:toppings,
                        itemNum:num,
                        id:createRandomId()
                    }
                ]
                firebase.firestore().collection(`users/${user.uid}/orders`).doc(`${cart.id}`)
                .update({
                    itemInfo:[...itemInfo]
                }).then(()=>{
                    dispatch(updatecart(itemInfo))
                })
            //カート自体を新規追加処理
            }else{
                let orderData = {
                    itemInfo:[
                        {
                            itemId:id,
                            size:size,
                            toppings:toppings,//配列
                            itemNum:num,
                            id:createRandomId()
                        } 
                    ],
                    status:0,
                    uid:user.uid
                }
                //ファイアベースが初回のクリックだけ動作してくれない。
                //クリックでここまでは入ってきているのはconsole.logで確認済み
                console.log(orderData)
                firebase.firestore().collection(`users/${user.uid}/orders`).add(orderData).then(doc=>{
                    console.log('あいう') 
                    orderData.id = doc.id
                    dispatch(addcart(orderData))
                })
            }
        }else{
            return console.log('ここでログイン画面へリダイレクト+上記変数をローカルにデータ保存')
        }
    }
    return (
        <div className="">
            <div>
                <FormLabel>サイズを選択してください</FormLabel>
                <RadioGroup aria-label="size" name="size" value={size} onChange={(e)=>setSize(e.target.value)}>
                    <FormControlLabel value='0' control={<Radio />} label={`Mサイズ：${props.item.price}円`} />
                    <FormControlLabel value='1' control={<Radio />} label={`Lサイズ：${props.item.subPrice}円`} />
                </RadioGroup>
            </div>
            <div>
                <FormLabel>トッピング：１つにつきM 200円(税抜) L 300円(税抜)</FormLabel>
                {/* 子が親のステートを操作できるようにpropsで渡す */}
                <ToppingsCheckBox 
                    toppings={checkedToppings}
                    setToppings={setCheckedToppings}
                />
            </div>
            <div>
                <FormLabel>個数を入力してください</FormLabel>
                <Input id="num" type="number" onChange={(e)=>checkNum(e.target.value)} value={num}/>
            </div>
            <h2>小計：{total}円(税抜)</h2>
            <Button variant="outlined" onClick={doAddcart}>追加</Button>
        </div>
    )
}