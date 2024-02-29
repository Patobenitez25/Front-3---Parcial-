import React, {useState} from 'react';
import Card from "./Card.jsx"

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        libroFavorito: "",
    })
    console.log(usuario);
    

    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
      if(usuario.nombre.trim().length >= 3 && usuario.libroFavorito.length >= 6 ){
          setErr(false)
      } else {
          setErr(true)
      }
  }

    /* const [show, setShow] = useState(false)
    const [err, setErr] = useState(false) */


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text"onBlur={(event) => setUsuario({...usuario, nombre: event.target.value})} />
                <label>Libro Favorito</label>
                <input type="text" onBlur={(event) => setUsuario({...usuario, libroFavorito: event.target.value})} />
                <button type= "submit">Enviar</button>
            </form>
        {err ? <p style={{color: 'red'}}>“Por favor chequea que la información sea correcta”.</p> : null}
        </div>
    )
}

export default Form