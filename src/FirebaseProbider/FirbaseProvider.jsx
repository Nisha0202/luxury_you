import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup} from "firebase/auth";
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function FirbaseProvider(props) {
const googleprovider = new GoogleAuthProvider();

  const auth = getAuth();
  const [usern , setUsern] = useState(null);

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
  }

  //google
  const googleLogin=()=>{
    signInWithPopup(auth, googleprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromResult(result);
  });
  };

//logout
const logOut = ()=>{
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    })
    .catch((error) => {
      // An error happened.
      console.error('Error signing out:', error);
    });
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
  signInUser, googleLogin, logOut, usern};

  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
      </AuthContext.Provider>
  )
}
