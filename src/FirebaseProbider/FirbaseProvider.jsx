import React, { createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

export default function FirbaseProvider(props) {

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const allValues = {createUser};
  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
      </AuthContext.Provider>
  )
}
