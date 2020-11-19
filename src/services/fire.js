import React, {useContext, useState, useEffect} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
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

    function submitBroiler(title, code, uid){
      const db = firebase.firestore()

      db.collection("broilers").add({
        title: title,
        code: code,
        user: uid
      })
    }

    function displayBroilers(){
      const db = firebase.firestore()

      return db.collection("broilers").where("user", '==', currentUser.uid)
    }

    function findBroiler(id) {
      const db = firebase.firestore()

      return db.collection('broilers').doc(id).get()
    }

    function updateBroiler(id, title, code) {
      const db = firebase.firestore()

      return db.collection('broilers').doc(id).update({
        title: title,
        code: code
      }).then(() => console.log("it works")).catch(err => console.log(err))
    }

    function deleteBroiler(id){
      const db = firebase.firestore()

      return db.collection('broilers').doc(id).delete().then(() => console.log("it works")).catch(err => console.log(err))
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
      })

      return unsubscribe
    }, [])
    
    const options = {
      checkAccount,
      submitAccount,
      logout,
      submitBroiler,
      displayBroilers,
      findBroiler,
      updateBroiler,
      deleteBroiler,
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
