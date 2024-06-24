import React from 'react'
import '../../pages/contact/Contact.css'
export default function Contact() {
  return (
    
    
    <>
        <section className="form-container">
          <h2 className='title'>Contactanos</h2>
          <form className='contact-form'>
            <div className="input-container">
              <label htmlForm='name' className='label'>Nombre</label>
              <input type='text'
              placeholder='Ingrese nombre'
              id='name'
              name='name'></input>
            </div>

            <div className="input-container">
              <label htmlForm='email' className='label'>Email</label>
              <input type='email'
              placeholder='Ingrese email'
              id='email'
              name='email'></input>
            </div>

            <div className="input-container">
              <label htmlForm='asunto' className='label'>Asunto</label>
              <select className='select-consulta'>
                <option>Soporte tecnico</option>
                <option>Consultas o devoluciones</option>
                <option>Consultas sobre productos</option>
              </select>
            </div>
            
            <div className="input-container">
              <label htmlForm='consulta' className='label'>Consulta</label>
              <textarea name="consulta" id="consulta" rows={5} ></textarea>
              
            </div>
            <div className="btn-container text-center">
              <button className='btn btn-primary '>CONSULTAR</button>
            </div>

          </form>
        </section>

        <hr className='section-divider'></hr>

        <section className='contact'>
          <h2 className='title' >
            Informacion de contacto
          </h2>

          <div className="contact-sections">
            <article className='contact-info'>
              <p><strong>Correo Electrónico:</strong> <a href="soporte@indiSpot.com">soporte@indieSpot.com</a></p>
              <p><strong>Número de Teléfono:</strong> 1123489332</p>
              <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9 AM - 6 PM</p>
            </article>
            
            <div className='transition'></div>

            <article className='contact-address-faqs'>
            <h2>Dirección Física</h2>
            <p>Virrey del pino 123, CABA, Argentina</p>
            <h2>Preguntas frecuentes</h2>
            <a href='#'>Ver faqs</a>

            </article>
          </div> 
          
          
        </section>

        
      
    </>
  )
}
