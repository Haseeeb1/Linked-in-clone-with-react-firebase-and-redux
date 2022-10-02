import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArT0vNP5BX8abXqjXm3mUGLvnGYIYoBc",
  authDomain: "linkedin-clone-8d8be.firebaseapp.com",
  projectId: "linkedin-clone-8d8be",
  storageBucket: "linkedin-clone-8d8be.appspot.com",
  messagingSenderId: "681601510016",
  appId: "1:681601510016:web:3189a75eb0f139c7fdd465",
  measurementId: "G-4WGVZ7Q5EB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
