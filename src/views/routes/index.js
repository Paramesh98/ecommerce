import { Login } from '@mui/icons-material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import Cart from '../pages/cart'
import Home from '../pages/home'
import SignIn from '../pages/login'
import ProductView from '../pages/productOverview'
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'

function Router() {
    return (
       <BrowserRouter>
            <Routes>
                <Route exact path="/signin" element={<PublicRoute component={SignIn} />} />
                <Route exact path="/" element={<PrivateRoute component={Home} />} />
                <Route exact path="/cart" element={<PrivateRoute component={Cart} />} />
                <Route exact path="/about" element={<PrivateRoute component={About} />} />
                <Route exact path="/product/:id" element={<PrivateRoute component={ProductView} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
