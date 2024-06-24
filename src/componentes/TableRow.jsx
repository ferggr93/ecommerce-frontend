import React from 'react'
import '../pages/adminUsers/AdminUsers.css'
  //traemos la url del servidor para poder acceder a las imagenes
  const URL = import.meta.env.VITE_URL_IMAGES;
export default function TableRow({product, DeleteProduct, setFormValue}) {
  
  const imgStyle = {
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    objectFit:'cover'
  }
  
  const handleDelete = () =>{
        DeleteProduct(product._id)
    }

    const handleEdit = ()=>{
      setUpdate(product)
    }
    return (
    <>
        <tr>
      <td>
        <img 
        className='table-img'
        style={(imgStyle)}
        src={`${URL}/images/products/${product.image}`}>
        </img>
      </td>
      <td className='no-wrap'>{product.name}</td>
      <td className='description'>{product.description}</td>
      <td>{product.price}</td>
      <td className='acciones'>
        <buttton className="btn btn-danger me-1 "
        onClick={handleDelete}>Borrar</buttton>
        <buttton className="btn btn-warning "
        onClick={()=> setFormValue(product)}>Editar</buttton>
      </td>
    </tr>
    </>
  )
}
