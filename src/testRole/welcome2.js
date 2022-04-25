import React, { useState } from "react";
import { Button } from "@mui/material";
import { auth, firestore } from "../../noSQLDatabase/firebase-config";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import { doc, setDoc, collection } from "firebase/firestore"

export default function Welcome() {
  const [registration, setRegistration] = useState(false);

  async function userRegistration(email, password, role) {
    const userInfo = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      ).then((userFirebase) => {
        return userFirebase
      }
    )
    console.log(userInfo.user.uid)

    const docRef = doc(firestore, `user/${userInfo.user.uid}`)
    setDoc(docRef, { email: email, role: role })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const role = e.target.elements.role.value

    console.log("submit", email, password, role)

    if (registration) {
      userRegistration(email, password, role)
    } else {
      signInWithEmailAndPassword(auth, email, password)
    }
  };

  return (
    <>
      <h1>{registration ? "Registration" : "Sign in"}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type="email" id="email" />
        </label>
        <label>
          Password:
          <input type="password" id="password" />
        </label>
        <label>
          Role:
          <select id="role">
            <option type="manager">Manager</option>
            <option type="student">Student</option>
          </select>
        </label>
        <input
          type="submit"
          value={registration ? "Registration" : "Sign in"}
        />
      </form>

      <Button variant="outlined" onClick={() => setRegistration(!registration)}>
        {registration ? "Sign in" : "Create new account"}
      </Button>
    </>
  );
}
