import React from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import Rutas from './componentes/Rutas'
import Banner from './componentes/Banner'
import Footer from './layout/footer/Footer'

export default function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Banner></Banner>
      <main className='main'>
      
        <Rutas></Rutas>
      </main>
      <Footer></Footer>
    </>
  )
}
