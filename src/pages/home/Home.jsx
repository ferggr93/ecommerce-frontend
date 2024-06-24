import React from 'react'
import ProductContainer from '../../componentes/ProductContainer'
import BannerEsperados from '../../componentes/bannerEsperados/BannerEsperados'
import Hades2 from '../../assets/bannerImgs/hades2.avif'
import silent from '../../assets/bannerImgs/sh2.jpg'
import Consolas from '../../componentes/consolas/Consolas'

export default function Home() {
  
  
  
  return (
    <>
      
      <h1 className='title bg-body-secondary'>Juegos más esperados 2024</h1>
        <BannerEsperados
          title='Silent hill 2'
          description='Silent Hill 2 es un videojuego de terror psicológico de disparos en tercera persona
           desarrollado por Bloober Team y publicado por Konami.
            El videojuego se lanzará en PlayStation 5 y Windows.'
          date='TBA'
          imagen={silent}>
          
        </BannerEsperados>
        <BannerEsperados
          title='Hades 2'
          description='Hades II es un próximo videojuego de rol de acción roguelike desarrollado
           y publicado por Supergiant Games. Se anunció en diciembre de 2022 y se lanzó en acceso
           anticipado en mayo de 2024. Actualmente es exclusivo de Windows, aunque Supergiant tiene 
           planes de llevar el juego a otros sistemas.'
          date='TBA'
          imagen={Hades2}>
          
        </BannerEsperados>
        <h1 className='title bg-body-secondary'>Los más vendidos</h1>
      <ProductContainer></ProductContainer>

      <h1 className='title bg-body-secondary'>Consolas</h1>
      <Consolas></Consolas>
    </>
  )
}
