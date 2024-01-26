import React, { createContext } from 'react';
const AuthContext= createContext(null);
const user={displayName:"Talha Tarique"}
const AuthProviders = ({children}) => {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;