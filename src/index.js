import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase/app";
// firebase.initializeApp({
//   apiKey: "AIzaSyDHE9fVBUM_mto-p_SkWnyKtOiRu8M5F98",
//   authDomain: "react-firebase-farazamiruddin.firebaseapp.com",
//   databaseURL: "https://react-firebase-farazamiruddin.firebaseio.com",
//   projectId: "react-firebase-farazamiruddin",
//   storageBucket: "react-firebase-farazamiruddin.appspot.com",
//   messagingSenderId: "338564911587",
//   appId: "1:338564911587:web:c34e6fee0ff41bbe7fd0d6"
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
