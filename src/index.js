import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore'

const store = createStore(reducer)

var firebaseConfig = {
  apiKey: "AIzaSyD5hTNGQzFw-pAf6zXzgx5SpOz78rn02l4",
  authDomain: "react-curry-app.firebaseapp.com",
  projectId: "react-curry-app",
  storageBucket: "react-curry-app.appspot.com",
  messagingSenderId: "832819080738",
  appId: "1:832819080738:web:a8c3e3de93a9faf2dbe47b",
  measurementId: "G-8WN22JB80E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();
firebase.auth();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
