import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import Postprot from './Postprot'
import Axios from 'axios';
import ('./Posttw.css')

const Posttw = () => {

    const [values, setvalues] = useState();
    const [listUsers, setListUsers] = useState();


    const Handlevalues = (value) => 
    {
      setvalues((prevValues)=>({
        ...prevValues,
        [value.target.name]: value.target.value,
      }))
    };
  
    console.log(values)
  
    const Handleclick = () =>{
      Axios.post('http://localhost:3001/register',
      {
        post: values.post,
    }).then(()=>{
        setListUsers([
          ...listUsers,
          {
            post: values.post,
          }
        ])
        })
      }

      useEffect(()=>
      {
        Axios.get('http://localhost:3001/getpost').then((Response)=>{
          setListUsers(Response.data);
        })
      }, [])

  return (
    <div className='pagepost--container'>
      <div>
        <nav>
            <ul className='botoes--container'>
                <Link to={`/`} className='hometw--container'><img src="/home.png" alt="" className='imghome--container'/>Home</Link>
                <li className='msgtw--container'><img src="/msg.png" alt="" className='imgmsg--container'/></li>
                <li className='ntftw--container'><img className='notfy--container' src="/notfy.png" alt="" /></li>
            </ul>
        </nav>
        <div className='perfil'>
            <img className='phperfil' src="perfil.jpg" alt="foto perfil" />
            <Link to={`/Perfil`} className='namepf'>Nome</Link>
            
        </div>

        <div className='miniperfil--container'>
            <h1></h1>
        </div>
        <div className='chatpost--container'>
            <div className='postchat'>
                <img className='phperfil' src="perfil.jpg" alt="foto perfil" />
                <input className='postchatw--input' type="text" name="post"  id="" placeholder='O que está acontecendo?' maxlength="1000" Change={Handlevalues}/>
                <button className='button--container' onClick={Handleclick}>Libertar</button>
            </div>
        </div>

        <div className='trends--container'>

        </div>
        <div className='sugestoes--container'>

        </div>

        {typeof listUsers !== "undefined" && listUsers.map((value)=>{
       return <Postprot
       key={value.id}
       listUsers={listUsers}
       setListGames={setListUsers}
       id={value.id}
       post={value.post}
       />
      })}


      </div>
    </div>
  )
}

export default Posttw
