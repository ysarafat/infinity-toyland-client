/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
function AuthProviders({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login user

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // update user name and photo
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        updateUser,
        loading,
        user,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
