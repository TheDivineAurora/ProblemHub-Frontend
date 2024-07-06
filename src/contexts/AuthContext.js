'use client'
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenicated, setIsAuthenicated] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setIsAuthenicated(!!storedToken);
    }, []);

    const login = () => {
        setIsAuthenicated(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenicated(false);
    }

    return (
        <AuthContext.Provider value = {{isAuthenicated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}