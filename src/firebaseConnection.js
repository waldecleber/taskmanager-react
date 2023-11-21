import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCXnjSAXUavlTSVi2Cos9Iq6w-MMnACc-0",
  authDomain: "react-app-63cfa.firebaseapp.com",
  projectId: "react-app-63cfa",
  storageBucket: "react-app-63cfa.appspot.com",
  messagingSenderId: "1087824474816",
  appId: "1:1087824474816:web:e228e3893c53da564ff325",
  measurementId: "G-VW8NB5MHZ1"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };