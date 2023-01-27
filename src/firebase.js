import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO4RTpAYDwLuQ_HYO0oms2CiyTzix5wvs",
    authDomain: "clone-fab97.firebaseapp.com",
    projectId: "clone-fab97",
    storageBucket: "clone-fab97.appspot.com",
    messagingSenderId: "547597652979",
    appId: "1:547597652979:web:53a621a4cfbdb145cbf886",
    measurementId: "G-HVS94D40V9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };