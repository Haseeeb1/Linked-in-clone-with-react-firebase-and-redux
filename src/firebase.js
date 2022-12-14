import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: //your api key,
  authDomain: //your authdomain,
  projectId: //your project id,
  storageBucket: //...,
  messagingSenderId: //....,
  appId: //....,
  measurementId: //....,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
