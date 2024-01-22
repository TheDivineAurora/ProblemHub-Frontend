import { useMutation,useQuery } from "react-query";
import axios from 'axios';

const registerUser = async (userData)=>{
    console.log(userData);
    try{
        const response = await axios.post('http://localhost:3000/auth/register',userData);
        return response.data;
    } catch (error){
        console.log(error);
        throw new Error(error.response.data.error);
    }
}

const loginUser = async (userData)=>{
    try{
        const response = await axios.post('http://localhost:3000/auth/login',userData);
        return response.data;
    } catch (error){
        console.log(error);
        throw new Error(error.response.data.error);
    }
}

export const useRegisterUser = () => {
    return useMutation(registerUser);
}

export const useLoginUser = () => {
    return useMutation(loginUser);
}