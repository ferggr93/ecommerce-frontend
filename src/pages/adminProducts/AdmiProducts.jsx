import React, { useState,useEffect } from 'react'
import Form from '../../componentes/Form';
import Table from '../../componentes/Table';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';


export default function AdmiProducts() {
  
  const {register, handleSubmit, setValue} = useForm();
  
  

  const URL = import.meta.env.VITE_URL_BACK;

  const [products, setProducts] = useState(null);
  
  const logout = ()=>{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token')
    
  }
  
  const GetProducts = async( page = 0) =>{
        
    try{
        const response = await axios.get(`${URL}?page=${page}`);
        
        
        const Arrproducts = response.data.products;
        setProducts(Arrproducts)

    }catch(error){
        console.log(error)
    }
}

useEffect( ()=>{
    GetProducts();
}, [products])
  

  const DeleteProduct = async (id) =>{
    try{
      //Obtenemos el token
      const token = localStorage.getItem('token');
      //Chequeamos que en efecto venga el token para poder borrar.
      if(!token){
        return 
      }
      
      const url = URL + id;
      
      const response = await axios.delete(url, {
        headers:{
          Authorization:token
        }//Necesario para validar el token y comprobar si puede o no borrar
      });
     

      
    }catch(error){
      if(error.response.status === 401)
        console.log('No se puede eliminar, token vencido')
        //Logout();
    }
   
  }

  const CreateProduct = async (product)=>{
        try{
          const formData = new FormData();
      
          formData.append("name", product.name)
          formData.append("price", product.price)
          formData.append("description", product.description)
          formData.append("category", product.category)
          formData.append("image", product.image[0])
          console.log(formData)
            console.log(formData.get('image'))
             await axios.post(URL, formData);
            
            Swal.fire({
              title:'Exito!',
              text:`El producto ha sido creado`,
              icon:'success',
              iconColor:'dodgerblue',
              
            })

        }catch(error){
          console.log(error)
        }
  }

  const UpdateProduct = async(product)=>{
    
      try{
        //Obtenemos el token
      const token = localStorage.getItem('token');
      //Chequeamos que en efecto venga el token para poder borrar.
      if(!token){
        return 
      }

        const urlEditar = URL + product._id
        await axios.put(urlEditar, product,
          {
            headers:
            {Authorization:token}
          }
        );
      
      
      Swal.fire({
        title:'Exito',
        text:'Su producto fue actualizado con exitos',
        icon:'success'
      })
      }
      catch(error){
        console.log(error)
      }

      
  }
  const setFormValue = (product)=>{
      setValue('name', product?.name || "")
      setValue('price', product?.price || "")
      setValue('category', product?.category || "")
      setValue('description', product?.description || "")
      setValue('_id', product?._id || "")
      setValue('image', product?.image || "")
      
    }

    const formReset = ()=>{
      setValue('name', '')
      setValue('price', '')
      setValue('category', '')
      setValue('description','')
      setValue('_id', 'product._id')
      setValue('image', '')
    }

  return (
    <>
      
      <div className='admin-container'>
      <Form
      
      CreateProduct={CreateProduct}
      register={register}
      formReset={formReset}
      handleSubmit={handleSubmit}
      UpdateProduct={UpdateProduct}>
      
      </Form>
      <Table
      
      setProducts={setProducts}
      products={products}
      DeleteProduct={DeleteProduct}
      formReset={formReset}

      setFormValue={setFormValue}>
   

      </Table>
      </div>
      
    </>
  )
}
