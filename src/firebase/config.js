import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPPgT8LyIIXS20UH9P2KKGo0YgwcgUpkg",
    authDomain: "fir-a636a.firebaseapp.com",
    projectId: "fir-a636a",
    storageBucket: "fir-a636a.appspot.com",
    messagingSenderId: "565627386089",
    appId: "1:565627386089:web:892d1c1de0ee7797459878",
    measurementId: "G-W25XS0C7T0"
  };

  export default firebase.initializeApp(firebaseConfig)