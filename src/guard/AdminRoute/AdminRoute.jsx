/*Este es el componente que se encargara de proteger
el acceso a los links solo de <admins></admins>*/

import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminRoute( { children }) {
    /*En la practica esta es una propiedad que se 
    extraera del local storage.
    Evaluo, el usuario es administrador? de ser asi devuelve el children 
    que es basicamente el componente que tenemos protegido en el guard en las rutas
    y si es false lleva al user al inicio.
    por mas que no se pintaran los links, alguien que supiera el path podia acceder cambiando en la 
    barra de navegacion*/


    const isAdmin = true;
  
   return isAdmin ? children : <Navigate to='/' replace></Navigate>
}
