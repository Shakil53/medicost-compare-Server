/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

  const updateProfilePic = (name, photo) =>
    updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoogleLogin = () => signInWithPopup(auth, GoogleProvider);

  const GithubLogin = () => signInWithPopup(auth, GithubProvider)


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe;
    }

  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('logged in user inside', loggedUser);
      setUser(loggedUser);
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    singIn,
    setUser,
    logOut,
    loading,
    GoogleLogin,
    GithubLogin, updateProfilePic
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;