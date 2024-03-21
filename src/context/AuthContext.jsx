import { createContext, useMemo, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [users, setUsers]=useState([{name: 'Adrian', email: '1234@1234',password: '1234'}])
   
   console.log('Users Registered:',users)
    
   const [user, setUser] = useLocalStorage('user', null);
   

    const login = async (data) => {
       
        setUser(data);
    
        
    }
     const logout =  () => {
            setUser(null);
           
    }
    const register = (data)=>{
            setUser(data)
            setUsers((prevUsers) => [...prevUsers, data])
         
    }

    const value = useMemo(()=>({
        user,
        users,
        login,
        register,
        logout
    }), [user]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}