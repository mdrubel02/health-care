import React, { createContext } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const signInWithGoogle =()=>{
        setLoading()
        return signInWithPopup(auth,provider)
    }
    const authInfo = {signInWithGoogle,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;