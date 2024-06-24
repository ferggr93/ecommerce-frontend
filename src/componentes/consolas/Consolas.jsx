import React from 'react'
import '../../componentes/consolas/Consolas.css'
import ps5 from '../../assets/consolesImg/ps5.webp'
import nintendo from '../../assets/consolesImg/switch.jpg'
import xbox from '../../assets/consolesImg/xbox.jpg'
export default function Consolas() {
  
    const consoles = [
        {
            name:'Playstation 5',
            description:'Consola de ultima generacion de Sony',
            price:'1050000',
            img:`${ps5}`
        },
        {
            name:'Xbox serie S',
            description:'Consola de ultima generacion de Microsoft',
            price:'1000000',
            img:`${xbox}`
        },
        {
            name:'Switch',
            description:'Consola de ultima generacion de Nintendo',
            price:'600000',
            img:`${nintendo}`
        }
    ]
  
    return (
    <div className='consoles-container'>
        {
            consoles.map( console => {
                return(
                    <>
                        <div className='console'>
                            
                            <img src={console.img} className='console-img'></img>
                            <div className='console-text'>
                                <h3 className='console-name'>{console.name}</h3>
                                <p className='console-description'>{console.description}</p>
                            </div>
                            
                            <div className="values">
                                <span className='price'>${console.price}</span>
                                <buttton className='ver btn btn-primary'>Comprar</buttton>
                            </div>
                        </div>
                    </>
                )
            })
        }
    </div>
  )
}
