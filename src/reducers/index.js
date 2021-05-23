//全てのreducerメソッドが描かれたjsファイルを統合するための場所。
import { combineReducers } from 'redux'
//結合するjsファイルをインポート
import sidenav from './sidenav'
import loginstatus from './loginstatus'
import items from './items'
import toppings from './toppings'
import cart from './cart'

export default combineReducers({sidenav,loginstatus,items,toppings,cart})//複数あれば[,]でくぎる