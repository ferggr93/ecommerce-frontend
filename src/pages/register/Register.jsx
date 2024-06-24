import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import './../register/Register.css'

export default function Register() {
  
  const {register, handleSubmit} = useForm()
  const URL = import.meta.env.VITE_URL_IMAGES;

  const submitedData = async (data)=>{
    try{
      
      const response = await axios.get(`${URL}/users`);

      const users = response.data;

      users.map( user =>{
        if(user.email === data.email){
          Swal.fire({
            title:'Error',
            text:'Ya existe un usuario con esa direccion de correo ',
            icon:'error'
          })
          
        
        }else if(user.password != user.Rpassword){
          Swal.fire({
            title:'Error',
            text:'Las contraseñas deben coincidir',
            icon:'error'
          })
        }
        return;
      })
      
            
      await axios.post(`${URL}/users`, data)
      Swal.fire({
        title:'Exito',
        text:'Usuario creado con exito',
        icon:'success',
        
      })
    }catch(error){
      console.log(error)
    }
    

  }
  
  return (
    <>
    <div className='register-container'>

    <div className='form-contact-container'>
      <div className='contact-title'>
            <h2 className='contact-title text-uppercase text-primary mt-2 text-center'>Registrarse</h2>
          </div>
        <form className='contact-form' onSubmit={handleSubmit(submitedData)}>
          
          <div className='contact-left'>
          
          <div className='inputs-container'>
              <label htmlFor='name' className='label'>Nombre</label>
              <input type='text'
              className='input'
              id='name'
              {...register('name')}
              
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='age' className='label'>Edad</label>
              <input type='age'
              className='input'
              id='age'
              {...register('age')}
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='email' className='label'>Email</label>
              <input type='email'
              className='input'
              id='email'
              {...register('email')}
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='password' className='label'>Contraseña</label>
              <input type='password'
              className='input'
              id='password'
              {...register('password')}
              
              ></input>
          </div>
          

          </div>
          <div className='contact-right'>
          
          <div className='inputs-container'>
              <label htmlFor='username' className='label'>Username</label>
              <input type='text'
              className='input'
             
              id='username'
              {...register('username')}
              
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='phone' className='label'>Telefono</label>
              <input type='phone'
              className='input'
              id='phone'
              placeholder='OPCIONAL'
              {...register('phone')}
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='image' className='label'>Imagen</label>
              <input type='url'
              className='input'
              id='image'
              placeholder='OPCIONAL'
              {...register('image')}
              
              ></input>
          </div>
          <div className='inputs-container'>
              <label htmlFor='Rpassword' className='label'>Confirmar Contraseña</label>
              <input type='password'
              className='input'
              id='Rpassword'
              {...register('Rpassword')}
              
              ></input>
          </div>

          </div>
          
          
          
          <div className='btn-register text-center'>
              <button className='btn btn-primary mt-4 text-center'>Registrarse</button>
          </div>
          
        </form>
      </div>

    </div>
      
    </>
  )
}
