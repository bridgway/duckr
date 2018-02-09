import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyASL5-AK-tb1cBJ9Z9Tem_3IHXJv8T4ofw", //not sensitive 
  authDomain: "react-redux-tut-766ef.firebaseapp.com",
  databaseURL: "https://react-redux-tut-766ef.firebaseio.com",
  projectId: "react-redux-tut-766ef",
  storageBucket: "react-redux-tut-766ef.appspot.com",
  messagingSenderId: "363550815018"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000