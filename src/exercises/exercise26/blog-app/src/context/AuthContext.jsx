import {  createContext, useState } from "react";

export const AuthContext = createContext();

 export const AuthProvider = ({children}) => {
    const [isAuthenticated ,setIsAthenticated] = useState(false)

    const login = () => setIsAthenticated(true)
    const logout = () => setIsAthenticated(false)

    return ( 
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}