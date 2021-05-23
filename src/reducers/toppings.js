const initialState = [
    {id:1,name:'チーズ',checked:false},
    {id:2,name:'海苔',checked:false},
    {id:3,name:'ソーセージ',checked:false},
    {id:4,name:'カツ',checked:false},
    {id:5,name:'角煮',checked:false},
    {id:6,name:'フランスパン',checked:false},
    {id:7,name:'キムチ',checked:false},
    {id:8,name:'福神漬け',checked:false}
]

const toppings = (state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default toppings;