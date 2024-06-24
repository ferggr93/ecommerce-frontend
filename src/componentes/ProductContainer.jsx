import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import Product from './product/Product'

export default function ProductContainer() {
    
    const URL = 'http://localhost:3000/products'
    const [products, setProducts]=useState([])

    const GetProducts = async () =>{
        const response =  await axios.get(URL);
        const arrProducts = response.data.products;

        setProducts(arrProducts)
        
    }

    useEffect( ()=> {
        GetProducts();
    },[])

  
    return (
    <>
        <div className='product-container d-flex justify-content-around flex-wrap gap-1 p-2
        mt-5 mb-5 '>
            {
                products.map( product =>{
                    return(
                        <>
                            <Product
                            product={product}
                            key={product._id}></Product>
                        </>
                        
                    )
                    
                })
            }
        </div>
    </>
  )
}
