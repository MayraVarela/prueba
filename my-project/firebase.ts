import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAfDxzDisA5RgzMu1ZGnVlIRNhPPcBfOGI",
  authDomain: "api-movies-4862d.firebaseapp.com",
  projectId: "api-movies-4862d",
  storageBucket: "api-movies-4862d.appspot.com",
  messagingSenderId: "395278978636",
  appId: "1:395278978636:web:3118a23385a00f9d47eee9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }