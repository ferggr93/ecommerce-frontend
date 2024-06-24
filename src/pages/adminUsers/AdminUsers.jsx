import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import '../../pages/adminUsers/AdminUsers.css'

export default function AdminUsers() {

  const formStyle = {
    boxShadow:'5px 5px 5px 5px grey',
    padding:'.5rem',
    
    
  }
  const label = 'text-uppercase text-primary'


  const {register, handleSubmit, setValue} = useForm();
  const [users, setUsers] = useState(null);
  
  const URL = import.meta.env.VITE_URL_IMAGES;
  
  
  const GetUsers = async()=>{
    
    try{
      const response = await axios.get(`${URL}/users`)
      const users = response.data;

      setUsers(users)
      
      
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect( ()=> {
    GetUsers();
  }, [GetUsers]);
  

  const Delete = async(id)=>{
      
      try{
        
        Swal.fire({
          title: "Estas seguro?",
          text: "No podras revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "green",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, elimina!",
          cancelButtonText: 'No!'
        }).then(async(result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Eliminado!",
              text: "El usuario ha sido eliminado con exito",
              icon: "success"
            });
            const deleteUser = await axios.delete(`${URL}/users/${id}`)
          }
        });
      
      setUsers(users)
      }catch(error){
        console.log(error)
      }
  }

  const setFormValue = (user)=>{
        setValue('name', user.name);
        setValue('email', user.email);
        setValue('age', user.age);
        //setValue('password', user.password);
        setValue('role', user.role);
        setValue('_id', user._id)
        console.log(user._id)


  }

  const reset = ()=>{
    setValue('name', '');
        setValue('email', '');
        setValue('age', '');
        //setValue('password', user.password);
        setValue('role', '');
        setValue('_id', '')
        setValue('password', null)
        setValue('Rpassword', null)
  }

  const submitedData = async (data)=>{
    try{
      const newUser = {
        name:data.name,
        age:data.age,
        password:data.password,
        role:data.role,
        email:data.email,
        username:data.username,
        Rpassword:data.Rpassword
      }
  
     if(!data._id){
      await axios.post(`${URL}/users`, newUser)
      Swal.fire({
        title:'Exito!',
        text:'Usuario creado con exito',
        icon:'success'
      })
      setUsers(newUser);
     }
     else{
      await axios.put(`${URL}/users/${data._id}`,data)
      Swal.fire({
        title:'Exito!',
        text:'Usuario editado con exito',
        icon:'success'
      })
     }
      

    }catch(error){
      console.log(error)
    }
  }
  
  
  return (
    <>
        {/*<h1 className='title bg-body-secondary'>Usuarios</h1>
        <h1 className='title bg-body-secondary'>Carga de usuarios</h1>
        */}
       
    
    
    <div className='admin-container'>
    <h1 className='title bg-body-secondary'>Carga de productos</h1>
    <form className='admin-form'
    onSubmit={handleSubmit(submitedData)}>
      <div class="input-container">
        <label htmlFor="name" className='form-label' >Nombre</label>
        <input type="text"
         className="input" 
         id="name"
         {...register('name')}
         />
      </div>
      <div class="input-container">
        <label htmlFor="username" className='form-label' >Username</label>
        <input type="text"
         className="input" 
         id="username"
         {...register('username')}
         />
      </div>
      <div class="input-container">
        <label htmlFor="email" className='form-label' >Email</label>
        <input type="email"
         className="input"
          id="email"
          {...register('email')} />
      </div>
      <div class="input-container">
        <label htmlFor="password" className='form-label'>Contraseña</label>
        <input type="password"
         className="input" 
         id="password" 
         {...register('password')}/>
      </div>
      <div class="input-container">
        <label htmlFor="Rpassword" className='form-label'>Confirmar contraseña</label>
        <input type="password"
         className="input" 
         id="Rpassword" 
         {...register('Rpassword')}/>
      </div>
      <div className="input-container">
        <label htmlFor="age" className='form-label'>Edad</label>
        <input type="text"
         className="input" 
         id="age"
         {...register('age')} />
      </div>
      <div class="input-container">
        <label htmlFor="name" className='form-label'>Role</label>
        <input type="text"
         className="input"
          id="role"
          {...register('role')}/>
      </div>
  <div className='form-btn d-flex justify-content-center pt-2 pb-2'>
  <button type="submit" className="btn btn-primary me-2">Agregar</button>
  <button type="reset"
   className="btn btn-warning"
   onClick={reset}>Reset</button>
  </div>
  
</form>

      
        
      
<h1 className='title bg-body-secondary'>Tabla de productos</h1>
<div className='table-container'>
<table class="users-table">
  <thead>
    <tr>
      
      <th scope="col" className='col'>nombre</th>
      <th scope="col" className='col'>edad</th>
      <th scope="col" className='col'>email</th>
      <th scope="col" className='col'>role</th>

      <th scope="col "className='col'>Accciones</th>
    </tr>
  </thead>
  <tbody>
      {
        users && users.map ( user => {
          return (
            <>
              <tr>
      
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className='acciones'>
                  <button className='btn btn-danger me-1'
                  onClick={ () => Delete(user._id)}>Borrar</button>
                  <button className='btn btn-warning'
                  onClick={()=> setFormValue(user)}>Editar</button>
                </td>

            </tr>
            </>
          )
        })
      }
  </tbody>
</table>
      

    </div>
</div>
  
    
    
    </>
  )
}
