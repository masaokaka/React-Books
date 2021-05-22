//全てのreducerメソッドが描かれたjsファイルを統合するための場所。
import { combineReducers } from 'redux'
//結合するjsファイルをインポート
import sidenav from './sidenav'
import loginstatus from './loginstatus'
import items from './items'

export default combineReducers({sidenav,loginstatus,items})//複数あれば[,]でくぎる