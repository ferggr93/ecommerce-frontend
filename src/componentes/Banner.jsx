import React from 'react'
import bannerImg from '../../src/assets/banner-image.jpg'
export default function Banner() {
    const bannerStyle = {
        width:'100%',
        height:'400px',
        objectFit:'cover'
        
    }
  return (
    <> 
        <div className="banner-container">
            <img src={bannerImg} style={(bannerStyle)} className='banner-img'/>
        </div>
    
    </>
  )
}
