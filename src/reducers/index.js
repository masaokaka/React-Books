//全てのreducerメソッドが描かれたjsファイルを統合するための場所。
import { combineReducers } from 'redux'
//結合するjsファイルをインポート
import sidenav from './sidenav'

export default combineReducers({sidenav})//複数あれば[,]でくぎる