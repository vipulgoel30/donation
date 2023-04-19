/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Context = createContext()
export const useDataContext = () => useContext(Context);

const ContextProvider = props => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, ngo } = useAuth()
    const notLogged = ['/', '/user/signup', '/user/login', '/ngo/signup', '/ngo/login', '/ngo/all', '/ngo/id/:uid']
    const userLogged = ['/user', 'user/profile', '/ngo/id/:uid', '/user/donate', '/user/donations', '/ngo/all']
    const ngoLogged = ['/ngo', '/ngo/profile', '/ngo/id/:uid', '/ngo/all', '/ngo/dashboard', '/ngo/dashmore']

    useEffect(() => {
        const path = location.pathname
        if (user) { if (!userLogged.includes(path)) navigate('/user') }
        else if (ngo) { if (!ngoLogged.includes(path)) navigate('/ngo') }
        else if (user === null && ngo === null) { if (!notLogged.includes(path)) navigate('/') }
    }, [user, ngo, location.pathname])

    return <Context.Provider value={{ user, ngo }}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;