/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';

import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

function AuthProviders({ children }) {
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login user

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        createUser,
        loginUser,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
