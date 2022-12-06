import React from 'react'
import './postpro.css'
const Postprot = ({post,number}) => {
  return (
    <div>
      <div className='chatpro--container'>
          <img className='phperfi' src="perfil.jpg" alt="foto perfil" />
          <h1 className='namepro'>nome</h1>
          <p className='texpro'>{post}</p>
          <button className='curtida'><img  className='curtidaph' src="/heart.png" alt="" /> Like {number}</button>
      </div>
    </div>
  )
}

export default Postprot
