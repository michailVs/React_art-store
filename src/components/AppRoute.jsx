import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../context'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import CardList from './CardList'

const AppRoute = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
        ? <BrowserRouter>
        <Routes>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/" element={<CardList/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
        : <BrowserRouter>
        <Routes>
            <Route path="/admin" element={<Login/>}/>
            <Route path="/" element={<CardList/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoute