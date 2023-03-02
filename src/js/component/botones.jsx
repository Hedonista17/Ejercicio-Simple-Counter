import React from "react";

let cuentaAtrás = {
    icono: <i className="fa-solid fa-clock-rotate-left"></i>,
    nombre:"Cuenta atrás",
  
  }
  let play = {
    icono: <i className="fa-regular fa-circle-play"></i>,
    nombre:"Play",
  
  }
  
  let pausa = {
    icono: <i className="fa-regular fa-circle-pause"></i>,
    nombre:"Pausa",
  
  }
  let reset = {
    icono: <i className="fa-solid fa-power-off"></i>,
    nombre:"Reset",
  
  }
  


const Botones = (props) =>{

    return (
        <div className="botones">
      <button type="button" className="btn btn-dark mx-3 btn-lg">{props.icono} {props.nombre}</button>
      </div>
    
    );
};










export default Botones