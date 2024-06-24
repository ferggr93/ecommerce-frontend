import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/sea.jpeg';
import '../../pages/login/Login.css'


export default function Login() {
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_URL_LOGIN;

    
  const handleSubmit = (e)=>{
        e.preventDefault();
        const elements = e.target.elements;
        const [email, password] = elements;
        

        const data = {
            email:email.value,
            password:password.value
        };
        Login(data)
  }
  
  const Login = async(data)=>{
        try{
              const response =  await axios.post(URL,data)
                console.log(response)
              
                const token = response.data.token //obtenemos el token
                const user = response.data.user // guardamos el usuario
                
                //Luego guardamos en el storage ambos valores
                localStorage.setItem('token', token);
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                Swal.fire({
                    title:'Login correcto',
                    text:'Bienvenido, sera redireccionado',
                    icon:'success',
                    timer:1500
                }).then( ()=>{
                    navigate("/")
                })

        
            }catch(error){
            console.log(error)
        }
  }
    return (
    <>
        <div className='login-container' >
            
            <form onSubmit={handleSubmit} className='login-form'>
                <h1 className='log-title'>Ingresar</h1>
                <div className='input-container'>
                    <label htmlFor='email'
                    className=' label '>email</label>
                    <input type="email"
                    className= 'input'
                    id='email'
                    name='email'
                    placeholder='ingrese email' />
                </div>
                
                <div className='input-container'>
                    <label htmlFor='password'
                    className=' label '>contraseña</label>
                    <input type="password"
                    className='input'
                    id='password'
                    name="password"
                    placeholder='Ingrese contraseña'
                     />
                </div>
                <div className='input-container checkContainer'>
                    <label htmlFor='check'
                    className='check'>Recuerdame</label>
                    <input type="checkbox"
                    className='input'
                     />
                </div>

                <div className='btn-container'>
                    
                    <button type="submit" className='btn btn-primary text-uppercase'>Ingresar</button>
                </div>

            </form>

            <div className='img-login-container' >
                <img  
                className='login-img' 
                src={loginImage}></img>
            </div>

        </div>
    </>
  )
}
