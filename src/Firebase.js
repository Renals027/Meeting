import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkWu8JD5Xbsv7vrsg4GPV8S7nzYl1_9Xc",
    authDomain: "react-spas-demo.firebaseapp.com",
    databaseURL: "https://react-spas-demo.firebaseio.com",
    projectId: "react-spas-demo",
    storageBucket: "react-spas-demo.appspot.com",
    messagingSenderId: "824204470911",
    appId: "1:824204470911:web:9f44011a00c5dbd232ad4a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider =new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;