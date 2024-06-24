import React, { useEffect } from 'react'
import '../pages/adminUsers/AdminUsers.css'
import TableRow from './TableRow';


export default function Table({  products, DeleteProduct, setFormValue }) {
    
    const HandleSearch = (e)=>{
      const search = e.target.value;

      if(search<2){
        return;
      }
      //Hacer peticion para buscar usuarios en base al input ingresado por el usuario
      console.log(search)
    }
  
    return (
    <>
        <h1 className='title bg-body-secondary'>Tabla de productos</h1>
        <div className="table-container">
        <table className="users-table">
                <thead>
                  <tr>
                    <th scope="col" className='col'>Imagen</th>
                    <th scope="col" className='col'>Nombre</th>
                    <th scope="col" className='col'>Descripcion</th>
                    <th scope="col" className='col'>Precio</th>
                    <th scope="col" className='col '>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      products &&  products.map( product => {
                            return(
                                <>
                                    <TableRow
                                    product={product}
                                    DeleteProduct={DeleteProduct}
                                    
                                    setFormValue={setFormValue}></TableRow>
                                </>
                            )
                        })
                  }
                </tbody>
            </table>
        </div>
        

    </>
  )
}
