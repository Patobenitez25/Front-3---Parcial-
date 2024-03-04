import React from "react";
/* import CardStyles from '../Styles/Card.module.css' */

const Card = (props) => {
  console.log(props)
  return <div className="card">
    <p>Hola, {props.nombre}. Ya sabemos que tu libro favorito es {props.libroFavorito}</p>
  </div>;
};

export default Card;
