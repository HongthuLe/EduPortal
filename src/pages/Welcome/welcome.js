import React, { useEffect, useState } from "react"
import WelcomeWrapper from "./welcome.style"
import AOS from "aos";
import { TextField, Button, Stack } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase-config"
import { useNavigate } from "react-router-dom"

export default function Welcome() {
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    })
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard')
      }
    })
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/dashboard')
      }).catch((err) => setError(true))
  }

  return (
    <WelcomeWrapper>
      <div className="brand" data-aos="fade-down" data-aos-delay="500">
        <h2>welcome to</h2>
        <h1>EduPortal Management System</h1>
      </div>
      <div className="loginPage" data-aos="flip-left">
        <div className="formBox">
          <Stack spacing={3}>
            <form>
              <Stack spacing={2}>
                <TextField 
                  label="Enter your email" 
                  type="email" 
                  onChange={handleEmailChange}
                  value={email}
                  style={{ width: '100%' }}
                />
                <TextField
                  label="Password"
                  type="password"
                  onChange={handlePasswordChange}
                  value={password}
                />
                <Button onClick={handleSignIn} variant="contained" disableElevation>
                  login
                </Button>
                {error && <span style={{ color: 'red', textAlign: 'center' }}>Wrong email or password. Please try again!</span>}
              </Stack>
            </form>
          </Stack>
        </div>
      </div>
    </WelcomeWrapper>
  )
}
