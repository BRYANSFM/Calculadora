import React from "react";
import "../hojas-de-estilo/Pantalla.css";

const Pantalla = ({ input, NuevoInput }) =>{

  const agregarInputTeclado = (e) => {
    NuevoInput(e.target.value);
  };
  
  return(
  <input
    className="input"
    type="text"
    value={input}
    placeholder= "Escribe la operacion"
    name="texto"
    onChange={agregarInputTeclado}
  />)
};

export default Pantalla;