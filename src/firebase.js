import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALJA9Lcf0SypGFsoh0bXLeF5IDPRJGENE",
  authDomain: "todotutdeale.firebaseapp.com",
  databaseURL: "https://todotutdeale.firebaseio.com",
  projectId: "todotutdeale",
  storageBucket: "todotutdeale.appspot.com",
  messagingSenderId: "423025347600",
  appId: "1:423025347600:web:77af50fe96740f6e328e95",
  measurementId: "G-XGFFHPGT87",
});

const db = firebaseApp.firestore();

export default db;
