import React, { useEffect, useState } from 'react'
import '../pages/adminUsers/AdminUsers.css'
export default function Form({CreateProduct, register,  handleSubmit, UpdateProduct, formReset}) {
  
  
  
  

  const submitedData = (data)=>{
       
    
    if(data._id == null){
        
         CreateProduct(data)
    }
       else{
        UpdateProduct(data)
       }
       formReset()
      
  }

  

  

  

  return (
    <>
        
        
        
          <h1 className='title bg-body-secondary'>Carga de productos</h1>
          <form className='admin-form'
          onSubmit={handleSubmit(submitedData)}
          encType='multipart/form-data'>

            <div className='input-container'>
              <label htmlFor="name" className={`form-label`}>Nombre</label>
              <input type="text"
                className="input"
                id="name"
                {...register("name")}
                placeholder="Nombre del producto"
                
                
                />
            </div>

            <div className='input-container'>
              <label htmlFor="price" className={`form-label`}>Precio</label>
              <input type="number"
                class="input"
                id="price"
                {...register("price")}
                placeholder="Precio del producto"
                
                
                />
            </div>

            <div className='input-container'>
              <label htmlFor="image" className={`form-label`}>Imagen</label>
              <input type="file"
              accept="image/*"
                class="input"
                id="image"
                {...register("image")}
                placeholder="Imagen del producto"
                
                
                />
            </div>
            <div className='input-container'>
              <label htmlFor="category" className={`form-label`}>Categoria</label>
              <input type="text"
                class="input"
                id="category"
                {...register("category")}
                placeholder="Categoria del producto"
                
                />
            </div>
            <div className='input-container'>
              <label htmlFor="description" className={`form-label`}>Descripcion</label>
              <input type="text"
                class="input"
                id="description"
                {...register("description")}
                placeholder="Descripcion del producto"
                
                
                />
            </div>

            <div className='form-btn d-flex justify-content-center pt-2 pb-2'>
            <button type='submit' className="btn btn-primary me-2">Agregar</button>
              <button type='reset'className="btn btn-warning"
              onClick={formReset}>Reset</button>
            </div>
              
            
            

          </form>
       
    
    </>
  )
}
