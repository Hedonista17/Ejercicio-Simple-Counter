
import React from "react";
import Botones from "./botones.jsx"

//include images into your bundle
import Styles  from "/workspace/Ejercicio-Simple-Counter/src/styles/index.css";

let cuentaAtrás = {
  icono: <i class="fa-solid fa-clock-rotate-left"></i>,
  nombre:"Cuenta atrás",

}
let play = {
  icono: <i class="fa-regular fa-circle-play"></i>,
  nombre:"Play",

}

let pausa = {
  icono: <i class="fa-regular fa-circle-pause"></i>,
  nombre:"Pausa",

}
let reset = {
  icono: <i class="fa-solid fa-power-off"></i>,
  nombre:"Reset",

}


//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <h1> WELCOME TO THE SIMPLE COUNTER!</h1>
      <div className="container " id="contador">
        <div className="reloj mx-2 "><i class="fa-regular fa-clock fa-sm"></i></div>
        <div className="horas2 mx-2">{props.horas2 || 0}</div>
        <div className="horas1 mx-2">{props.horas1 || 0}</div>
        <div className="minutos2 mx-2">{props.minutos2|| 0}</div>
        <div className="minutos1 mx-2">{props.minutos1|| 0}</div>
        <div className="segundos2 mx-2">{props.segundos2 || 0}</div>
        <div className="segundos1 mx-2">{props.segundos1 || 0} </div>
      </div>
      <div>
      <h4><i class="fa-solid fa-angles-down"></i> If you want to try something else <i class="fa-solid fa-angles-down"></i></h4>
      </div>
      <div className=" d-flex position-absolute top-75 start-50 translate-middle">
        <Botones icono={cuentaAtrás.icono} nombre={cuentaAtrás.nombre}/>
        <Botones icono={play.icono} nombre={play.nombre}/>
        <Botones icono={pausa.icono} nombre={pausa.nombre}/>
        <Botones icono={reset.icono} nombre={reset.nombre}/>
      </div>
      </div>
  );
};

export default Home;
