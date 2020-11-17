import React, {useContext, useState, useEffect} from 'react'
import {auth} from './auth'

const FireContext = React.createContext() 

export function useFire() {
  return useContext(FireContext)
}

export function useAuthen() {
  return useContext(FireContext)
}

export function Fire({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function checkAccount(email, password){
      return auth.signInWithEmailAndPassword(email, password)
    }

    function submitAccount(email, password){
      return auth.createUserWithEmailAndPassword(email, password)
    }

    function logout(){
      return auth.signOut()
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
      })

      return unsubscribe
    }, [])

    !currentUser && window.location.assign("/enter")
    
    const options = {
      checkAccount,
      submitAccount,
      logout,
      currentUser
    }




    return (
      <>
        <FireContext.Provider value={options}>
          {!loading && children}
        </FireContext.Provider>
      </>
    )
}
