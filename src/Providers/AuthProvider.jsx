import React from 'react';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const authInfo = {};
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
