import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../Pages/Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [toaster, setToaster] = useState(false);

    const createUser = (email, password) => {
        setToaster(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logIn = (email, password) => {
        setToaster(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setToaster(true);
        return signOut(auth);
    }
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const registerWithGoogle = () => {
        setToaster(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logInWithGithub=() => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser.emailVerified || currentUser === null) {
                setUser(currentUser);
            }
            setToaster(false);
        });
        return () => {
            unsubscribe();
        }
    },[]);
    const authInfo = {
        createUser,
        logIn,
        emailVerify,
        user,
        setToaster,
        logOut,
        toaster,
        profileUpdate,
        registerWithGoogle,
        logInWithGithub,
        setUser
    }
    
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;