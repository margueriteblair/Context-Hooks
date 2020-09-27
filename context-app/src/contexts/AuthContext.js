import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [isAuthenticated, setAuthentication] = useState(false)

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }
    return (
        <div>
            <AuthContext.Provider value={{toggleAuth, isAuthenticated}}>
            {props.children}
            </AuthContext.Provider>
        </div>
    )
}
