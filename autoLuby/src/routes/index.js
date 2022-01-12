import React from "react";
import AuthRoute from './auth.route';
import AppRoute from './app.route';
import { useAuth } from '../providers/auth';

export default function Router() {

    const { authenticated } = useAuth();

    if(authenticated) {         // Rotas privadas
        return(
            <AppRoute />
        );
    } else {                    // Rotas públicas
        return(
            <AuthRoute />
        );
    }

}