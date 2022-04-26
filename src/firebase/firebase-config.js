import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDA_6jLymLUVfu1ZiMM8QRCQKxhhzvx06c",
  authDomain: "eduportal-879a9.firebaseapp.com",
  projectId: "eduportal-879a9",
  storageBucket: "eduportal-879a9.appspot.com",
  messagingSenderId: "114850343035",
  appId: "1:114850343035:web:2b9c1f2a94000a5c52dade"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }