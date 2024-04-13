import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null);
export default function FirbaseProvider(props) {
  const auth = getAuth();
  const [usern , setUsern] = useState(null);

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)

  }

  //obserer
  useEffect( ()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsern(user);
      
    } else {
      console.log("error");
    }
  });

  }, [])







  

  const allValues = {createUser,
  signInUser};
  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
      </AuthContext.Provider>
  )
}
