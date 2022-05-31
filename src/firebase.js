import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAO-mwhViSpi1q245hqEk2i_aiWkBAWua4",
  authDomain: "crud-e9fd4.firebaseapp.com",
  projectId: "crud-e9fd4",
  storageBucket: "crud-e9fd4.appspot.com",
  messagingSenderId: "669872627257",
  appId: "1:669872627257:web:62dbd0a14d50e0b660b7e8"
}
 export const firebaseApp = firebase.initializeApp(firebaseConfig)
