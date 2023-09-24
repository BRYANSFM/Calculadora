import React from "react";
import "../hojas-de-estilo/EliminarUltimoCaracter.css";

export const EliminarUltimoCaracter = (props) => (
  <div className="boton-EliminarUltimoCaracter" onClick={props.manejarBorrarCaracter}>
  {props.children}
  </div>
);

