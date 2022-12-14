// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
	// .env for CI/CD
	// https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore(app)
export const auth = getAuth(app)

export const logout = () => {
	localStorage.removeItem('user')
	localStorage.removeItem('walletsList')
	signOut(auth)
 }