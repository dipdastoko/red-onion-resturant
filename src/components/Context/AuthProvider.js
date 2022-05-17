import React, { createContext } from 'react';
import useFoods from '../Hooks/useFoods';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const foods = useFoods();
    const auths = useFirebase();
    return (
        <AuthContext.Provider value={{ foods, auths }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;