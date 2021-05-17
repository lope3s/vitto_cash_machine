import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userInformation, setUserInformation] = useState({})

    return (
        <AuthContext.Provider
        value={{isAuthenticated, setIsAuthenticated, userInformation, setUserInformation}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => (
    useContext(AuthContext)
)