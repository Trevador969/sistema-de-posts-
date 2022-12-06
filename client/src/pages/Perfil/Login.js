import React from 'react'
import './login.css'
import { useParams, Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
        <div>
            <div login--container>
                <div>
                <nav>
                    <ul className='botoes--container'>
                        <Link to={`/`} className='hometw--container'><img src="/home.png" alt="" className='imghome--container'/>Home</Link>
                        <li className='msgtw--container'><img src="/msg.png" alt="" className='imgmsg--container'/></li>
                        <li className='ntftw--container'><img className='notfy--container' src="/notfy.png" alt="" /></li>
                    </ul>
                </nav>
                </div>
                <div>
                <div className='perfil'>
                    <img className='phperfil' src="perfil.jpg" alt="foto perfil" />
                    <Link to={`/Perfil`} className='namepf'>Nome</Link>
                </div>
                  <div>
                    <img className='fotoperf' src="/Rectangle.png" alt="" />
                    <div className='bios--container'>
                      <img className='fotobios' src="perfil.jpg" alt="foto perfil" />
                      <h1 className='namebios'>nome</h1>
                      <p className='textbios'>Hello World, eu sou o Gabriel mais conhecido como trevador,sou dev Full Stack.</p>
                      <p className='Following'>0</p>
                      <p className='Followingg'>Following</p>
                      <p className='Follow'>0</p>
                      <p className='Followw'>Follow</p>
                    </div>
                  </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Login
