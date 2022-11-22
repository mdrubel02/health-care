import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const [user,setUser]= useState({})
    const provider = new GoogleAuthProvider()

    const signInWithGoogle =()=>{
        setLoading()
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const nameAndPhotoUpdate = (name)=>{
        setLoading(true)
          return updateProfile(auth.currentUser, { displayName: name })
      }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
    const authInfo = {signInWithGoogle,createUser,nameAndPhotoUpdate,loading,user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;