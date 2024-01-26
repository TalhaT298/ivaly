import React, { createContext } from 'react';
const AuthContext= createContext(null);
const user={displayName:"Talha Tarique"}
const AuthProviders = () => {
    return (
        <AuthContext.Provider value={user}>

        </AuthContext.Provider>
    );
};

export default AuthProviders;