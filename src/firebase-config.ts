import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDIGleWZlPt4X7toWl_33tNa8qNmcN-xIQ',
  authDomain: 'pokemon-react-960b6.firebaseapp.com',
  projectId: 'pokemon-react-960b6',
  storageBucket: 'pokemon-react-960b6.appspot.com',
  messagingSenderId: '835223507366',
  appId: '1:835223507366:web:e9bdda786242a46af83f67',
  measurementId: 'G-4REBX8SNFH',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
