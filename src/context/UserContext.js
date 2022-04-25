import { createContext, useState, useEffect, useContext } from 'react'
import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../firebase/firebase-config'

const UserContext = createContext({})

export const useUserContext = () => useContext()

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null)
      setError("")
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const signInUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const signOutUser = (email) => {
    signOut(auth)

  }

  const forgotPassword = (email, password) => {
    return sendPasswordResetEmail(auth, email)
  }

  const contextValue = {
    user, 
    loading, 
    error, 
    signInUser,
    signOutUser,
    forgotPassword,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider