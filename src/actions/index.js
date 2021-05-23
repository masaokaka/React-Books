//アクションクリエイター
export const SIDENAV = 'sideNav'
export const REGISTER = 'register'
export const LOGIN = 'login'
export const LOGOUT = 'logout'
export const ADDCART = 'addcart'
export const UPDATECART = 'updatecart'

export const sideNav = (onClose) =>({
    type:SIDENAV,
    onClose:onClose
})
export const register = (userdata) =>({
    type:REGISTER,
    userdata:userdata
})
export const login = (userdata) =>({
    type:LOGIN,
    userdata:userdata
})
export const logout = () =>({
    type:LOGOUT,
})
export const addcart = (orderData) =>({
    type:ADDCART,
    orderData:orderData

})
export const updatecart = (orderData) =>({
    type:UPDATECART,
    orderData:orderData
})