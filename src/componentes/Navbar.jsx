import React from 'react'
import { rutas } from '../constantes/rutas'
import { NavLink, useNavigate } from 'react-router-dom'



export default function Navbar() {
    //146
    
    let isAdmin= false;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.role ==='ADMIN_ROLE'){
      isAdmin=true;
    }
    
    //const avaibleLinks = rutas.filter( link => isAdmin || !link.admin) Filtramos los filtros que tengan permiso de admin
    
    const navigate = useNavigate();



    return (
    <>
        <nav className="navbar navbar-expand-lg  bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">INDIESPOT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
            <>
            
            <li className="nav-item">
                            <NavLink  className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
                            <NavLink  className="nav-link" to={'/about'}>Acerca</NavLink>
            </li>
            <li className="nav-item">
                            <NavLink  className="nav-link" to={'/contact'}>Contacto</NavLink>
            </li>
            <li className="nav-item">
                            <NavLink  className="nav-link" to={'/registro'}>Registrarse</NavLink>
            </li>

            {
              currentUser ? <li className="nav-item">
                                <NavLink  className="nav-link" onClick={()=>{
                                  localStorage.removeItem('currentUser')
                                  localStorage.removeItem('token')
                                  navigate('/');
                                }}>Logout</NavLink>
                            </li> 
                            :
                            <li className="nav-item">
                            <NavLink  className="nav-link" to={'/login'}>Login</NavLink>
            </li>
            }

            {
              isAdmin && (
                <>
                  <li className="nav-item">
                            <NavLink  className="nav-link" to={'/admin-products'}>AdminProduct</NavLink>
                  </li>
                  <li className="nav-item">
                            <NavLink  className="nav-link" to={'/admin-users'}>adminUser</NavLink>
                  </li>
                </>
              )
            }
            </>

        }
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
