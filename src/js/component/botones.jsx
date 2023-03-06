import React from "react";




const Botones = (props) =>{

    return (
        <div className="botones">
      <button onClick = {props.funcionalidad} type="button" className="btn btn-dark mx-3 btn-lg">{props.icono} {props.nombre}</button>
      </div>
    
    );
};










export default Botones