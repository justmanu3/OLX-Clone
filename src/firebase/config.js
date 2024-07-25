import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCCg1kN2Q4LEtNJIUP60SULLAPF5gj9ezs",
  authDomain: "my-olx-ea988.firebaseapp.com",
  projectId: "my-olx-ea988",
  storageBucket: "my-olx-ea988.appspot.com",
  messagingSenderId: "561806291502",
  appId: "1:561806291502:web:1f084028ef4832a28b25bf"
};

  export default firebase.initializeApp(firebaseConfig)