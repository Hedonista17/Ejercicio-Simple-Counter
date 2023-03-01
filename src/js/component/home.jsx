import React from "react";

//include images into your bundle
import Styles  from "/workspace/Ejercicio-Simple-Counter/src/styles/index.css";

//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <h1> WELCOME TO THE SIMPLE COUNTER!</h1>
      <div className="container" id="contador">
        <div className="reloj mx-2 "><i class="fa-regular fa-clock fa-sm"></i></div>
        <div className="horas2 mx-2">{props.horas2 || 0}</div>
        <div className="horas1 mx-2">{props.horas1 || 0}</div>
        <div className="minutos2 mx-2">{props.minutos2|| 0}</div>
        <div className="minutos1 mx-2">{props.minutos1|| 0}</div>
        <div className="segundos2 mx-2">{props.segundos2 || 0}</div>
        <div className="segundos1 mx-2">{props.segundos1 || 0} </div>
      </div>
      <h4><i class="fa-solid fa-angles-down"></i> If you want to try something else <i class="fa-solid fa-angles-down"></i></h4>
      <div className="botones">
      <button type="button" id="cuentaregresiva" class="btn btn-dark mx-3 btn-lg"><i class="fa-solid fa-clock-rotate-left"></i> Cuenta atrás </button>
      <button type="button" class="btn btn-dark mx-3 btn-lg"><i class="fa-solid fa-stop"></i> Parar </button>
      <button type="button" class="btn btn-dark mx-3 btn-lg"><i class="fa-solid fa-play"></i> Reanudar </button>
      <button type="button" class="btn btn-dark mx-3 btn-lg"><i class="fa-solid fa-backward-step"></i> Reinicio </button>
      </div>
    </div>
  );
};

export default Home;
