import React from "react";

//include images into your bundle

import "/workspace/react-hello/src/styles/index.css";

//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <div className="contador">
        <div className="reloj"></div>
        <div className="horas2">{props.horas1 || 0}</div>
        <div className="horas1">{props.horas2 || 0}</div>
        <div className="minutos2">{props.minutos1 || 0}</div>
        <div className="minutos1">{props.minutos2 || 0}</div>
        <div className="segundos2">{props.segundos1 || 0}</div>
        <div className="segundos1">{props.pepino || 0} </div>
      </div>
    </div>
  );
};

export default Home;
