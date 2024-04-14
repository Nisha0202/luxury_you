import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup} from "firebase/auth";
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function FirbaseProvider(props) {
const googleprovider = new GoogleAuthProvider();

  const auth = getAuth();
  const [usern , setUsern] = useState(false);
  // const createUser = async (email, password, username, image) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     // Signed in 
  //     const user = userCredential.user;
  //     await user.updateProfile({
  //       displayName: username,
  //       photoURL: image
  //     });
  //     // Now the profile has been updated, and you can access the new photo URL.
  //     console.log(user.photoURL);
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorMessage, errorCode);
  //   }
  // }
  const createUser = async (email, password, username, image) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      await user.updateProfile({
        displayName: username,
        photoURL: image
      });
      // Now the profile has been updated, and you can access the new photo URL.
      console.log(user.photoURL);
      setUsern(user); // Set the usern state with the updated user object
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    }
  }
  

  const signInUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
  }

  //google
  const googleLogin=()=>{
    signInWithPopup(auth, googleprovider)
  .then((result) => {
    // The signed-in user info.
    // const user = result.user;
    setUsern(result.user);
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
      // window.location.reload();
      setUsern(false);

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
