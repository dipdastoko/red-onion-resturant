import React, { createContext } from 'react';
import useFoods from '../Hooks/useFoods';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const foods = useFoods();
    return (
        <AuthContext.Provider value={foods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;