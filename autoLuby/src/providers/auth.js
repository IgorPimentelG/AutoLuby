import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({
        token: '',
        totalVehiclesLoggedUser: 0,
        totalVehicles: 0,
        totalEmployees: 0,
        user: {
            name: '',
            email: '',
            cpf: '',
            salary: 0,
            bio: '',
            vehicles: []
        }
    });
    const [header, setHeader] = useState({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null
    });

    // Fetch
    async function handlerSignIn(credentials) {

        await api.post('/login', credentials)
        .then((res) => {
            setUser(res.data);
            setHeader({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${res.data.token}`
            });
            setAuthenticated(true);
        })
        .catch((error) => {
            setAuthenticated(false);
        });

    }

    function handlerLogout() {
        setAuthenticated(false);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{authenticated, user, header, handlerSignIn, handlerLogout}}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook
export const useAuth = () => useContext(AuthContext);
