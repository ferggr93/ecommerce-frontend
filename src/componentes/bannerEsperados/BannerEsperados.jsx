import React from 'react'
import '../bannerEsperados/BannerEsperados.css'
export default function BannerEsperados({title, imagen, description, date}) {
  return (
    <>
     
     <div className="banners-container">
         <div className='banner-esperados'>
                <div className='img-container'>
                    <img src={imagen}></img>
                </div>
                <div className='banner-text-container'>
                    <h2 className='banner-title'>{title}</h2>
                    <p className='description'>{description}
                    </p>
                    <a href='#'><span>Ver más</span></a>
    
                    <div className='values'>
                      <h3 className='text-primary'>{date}</h3>
                      <button className='btn btn-primary'>Reservar</button>
                    </div>
                </div>
                
            </div>
     </div>
        
    </>
  )
}
