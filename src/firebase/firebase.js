import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvXQTxR_OYWIpzWIkaImzr8df2c6iTIi0",
  authDomain: "netflix-clone-39460.firebaseapp.com",
  projectId: "netflix-clone-39460",
  storageBucket: "netflix-clone-39460.appspot.com",
  messagingSenderId: "490360731517",
  appId: "1:490360731517:web:dede22a534d02dfa7dfe14",
  measurementId: "G-SD2WZD425J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebase.database();
const auth = firebase.auth();

export {db,auth};