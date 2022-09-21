import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export const app = initializeApp({
  apiKey: "AIzaSyAFbNPDL78PHSsi69N26cc7LjunT-gHADA",
  authDomain: "auth-guarding.firebaseapp.com",
  projectId: "auth-guarding",
  storageBucket: "auth-guarding.appspot.com",
  messagingSenderId: "565759711676",
  appId: "1:565759711676:web:b064ea4f04cf23f7f7b3b9",
  measurementId: "G-KBV58CJLTJ",
})

export const auth = getAuth()
export const firestore = getFirestore()
