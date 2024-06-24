import React from 'react'
import '../../layout/footer/Footer.css'
export default function Footer() {
  return (
    <>
        <footer className='footer-section bg-dark'>
            <div className='first-section'>
                <h2>Contactanos</h2>
                <p className='sectionText'>1133456783</p>
                <p className='sectionText'>Siguenos en nuestras redes</p>
                <p className='sectionText'>Instagram</p>
                <p className='sectionText'>Facebook</p>
            </div>
            <div className='logo-container'>
              <h1>IndieSpot</h1>
            </div>
            <div className='third-section'>
              <h2>FAQS</h2>
              <p className='sectionText'>Preguntas frecuentes</p>
              <p className='sectionText'>Acerca de nosotros</p>
              <p className='sectionText'>Atención al cliente</p>
              <p className='sectionText'>Envios a domicilio</p>
            </div>
            
        </footer>
    </>
  )
}
