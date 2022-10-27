import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Pages/Firebase/firebase.config';
import { useState } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [sppiner, setSpinner] = useState(false);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logIn=(email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        createUser,
        logIn,
        emailVerify,
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;