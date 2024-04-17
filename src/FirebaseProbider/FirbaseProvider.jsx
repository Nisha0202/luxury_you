import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null);
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
import { reload } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GithubAuthProvider } from "firebase/auth";
export default function FirbaseProvider(props) {

  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();

  const [usern, setUsern] = useState(false);
  const createUser = (email, password, username, image) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: username,
          photoURL: image
        });
        await user.reload(); 
        const updatedUser = await user.reload(); ;
        setUsern(updatedUser); 
       
        resolve(updatedUser); 
      } catch (error) {
        console.log(error.message, error.code);
        reject(error); // Reject the promise with the error
      }
    });
  };
  //454545As
  
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUsern(user); // Update usern state with the signed-in user's information
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };
  //update user
  const updateData = async (username, image) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: username,
          photoURL: image
        });
        const updatedUser = auth.currentUser;
        setUsern(updatedUser);
        console.log(updatedUser);
       
      } 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    }
  };
  //google
  const googleLogin = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
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

  // github
  const githubLogin = () => {
    signInWithPopup(auth, githubprovider)
      .then((result) => {
        setUsern(result.user);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromResult(result);
      });
  };

  //logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
        setUsern(false);

      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  }
  //obserer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsern(user);
      } else {
        console.log("error");
      }
    });
  }, [])


  const allValues = {
    createUser,
    signInUser, googleLogin, logOut, usern, githubLogin,
    updateData
  };
  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
    </AuthContext.Provider>
  )
}
