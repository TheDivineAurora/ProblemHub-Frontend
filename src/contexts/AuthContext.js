'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenicated, setIsAuthenicated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        setIsLoading(true);
        try{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                withCredentials : true
            })
            setIsAuthenicated(true);
            setUser(res.data.data);
        } catch(error){
            setIsAuthenicated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }

    const login = () => {
        fetchUserData();
    }

    const logout = async () => {
        setIsLoading(true);
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
                withCredentials : true
            })
            setIsAuthenicated(false);
            setUser(null);
        } catch(error){
            console.log(error);
        } 
    }

    return (
        <AuthContext.Provider value = {{isAuthenicated, user, isLoading, login, logout, fetchUserData}}>
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