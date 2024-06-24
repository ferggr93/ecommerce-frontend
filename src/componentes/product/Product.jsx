import React from 'react'
import '../../componentes/product/Product.css'
export default function Product({product}) {

  const URL = import.meta.env.VITE_URL_IMAGES;
  return (
    <>
    
        <div className='card mb-4'>

        <div className='card-head'>
          <img className='card-img' src={`${URL}/images/products/${product.image}`} alt={product.name}/>
        </div>
        

          
          <div className='card-body'>
          
            <p className='title-card'>{product.name}</p>
          
            <p className='card-description'>{product.description}</p>

          </div>
          <div className='card-footer d-flex justify-content-between'>
            <h3 className='price'>${product.price}</h3>
            <div className='btn-container'>
              <button className="btn btn-primary me-2">Comprar</button>
              <button className="btn btn-success">Ver</button>
            </div>
            
          </div>
          
        </div>
    </>
  )
}
