import React, { useState } from 'react'

import Home from './pages/Home/home'
import Welcome from './pages/Welcome/welcome'

import { auth, firestore } from './noSQLDatabase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

function Main() {

  const [user, setUser] = useState(null)

  async function getRole(uid) {
    const docRef = doc(firestore, `user/${uid}`)
    const docCode = await getDoc(docRef)
    const infoFinal = docCode.data().role
    return infoFinal
  }

  function setUserWithFirebaseAndRole(userFirebase) {
    getRole(userFirebase.uid).then((role) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        role: role
      }
    setUser(userData)
    console.log("sgfgdfgdfg", userData);
    })
  }

  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase) {
      
      if(!user) {
        setUserWithFirebaseAndRole(userFirebase)
      }
    } else {
      setUser(null)
    }
  })

  return (
    <>
      {user ? <Home user={user} /> : <Welcome />}
    </>
  )
}

export default Main