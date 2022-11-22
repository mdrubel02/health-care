import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;