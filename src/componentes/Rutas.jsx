import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import About from '../pages/about/About'
import Register from '../pages/register/Register'
import AdmiProducts from '../pages/adminProducts/AdmiProducts'
import AdminUsers from '../pages/adminUsers/AdminUsers'
import AdminRoute from '../guard/AdminRoute/AdminRoute'
import Login from '../pages/login/Login'

/*Los admin user y products los encapsulamos en el adminRoutes que es el guardia que se encargara de hcer
la comprobacion de si el usuario puede o no acceder a estos links*/
export default function Rutas() {
    

    const rutas = useRoutes([
            
        {path:'/', element:<Home></Home>},
        {path:'/contact', element:<Contact></Contact>},
        {path:'/about', element:<About></About>},
        {path:'/registro', element:<Register></Register>},
        {path:'/admin-products', element:<AdminRoute><AdmiProducts/></AdminRoute>},
        {path:'/admin-users', element:<AdminRoute><AdminUsers/></AdminRoute>},
        {path:'/login', element:<Login></Login>}

    ])

    return rutas;
}
