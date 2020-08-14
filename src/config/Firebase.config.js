import * as firebase from "firebase/app";
import "firebase/auth";

var app = firebase.initializeApp({
  apiKey: "AIzaSyCsL8JCOMXTKif3k6WC8HRnkYgvteSnaRQ",
  authDomain: "auth-react-34d6c.firebaseapp.com",
  databaseURL: "https://auth-react-34d6c.firebaseio.com",
  projectId: "auth-react-34d6c",
  storageBucket: "auth-react-34d6c.appspot.com",
  messagingSenderId: "540012679946",
  appId: "1:540012679946:web:e09ddf7243ef129e4760f3",
  measurementId: "G-K243PYTZ3M"
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { app, googleAuthProvider };
