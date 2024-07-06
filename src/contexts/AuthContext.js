'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenicated, setIsAuthenicated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            fetchUserData();
        }
    }, []);

    const fetchUserData = async () => {
        try{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                withCredentials : true
            })
            setIsAuthenicated(true);
            setUser(res.data.data);
        } catch(error){
            console.log("Eroor fetching user :", error);
            setIsAuthenicated(false);
            setUser(null);
        }
    }

    const login = () => {
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            fetchUserData();
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenicated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{isAuthenicated, user, login, logout, fetchUserData}}>
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