import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD5hTNGQzFw-pAf6zXzgx5SpOz78rn02l4",
    authDomain: "react-curry-app.firebaseapp.com",
    projectId: "react-curry-app",
    storageBucket: "react-curry-app.appspot.com",
    messagingSenderId: "832819080738",
    appId: "1:832819080738:web:a8c3e3de93a9faf2dbe47b",
    measurementId: "G-8WN22JB80E"
  };

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
firebase.analytics();
firebase.firestore();
firebase.auth();