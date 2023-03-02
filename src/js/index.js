//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds =0;
setInterval(()=>{
    let secondsString = seconds.toString();
    let unidades = secondsString[secondsString.length-1];
    let decenas = secondsString[secondsString.length-2];
    let centenas = secondsString[secondsString.length-3];
    let millares = secondsString[secondsString.length-4];
    let decMillar = secondsString[secondsString.length-5];
    let centMillar = secondsString[secondsString.length-6];
    
    seconds++;
ReactDOM.render(<Home segundos1={unidades} segundos2={decenas} minutos1={centenas} minutos2={millares} horas1={decMillar} horas2={centMillar}/>, document.querySelector("#app"));
},1000);



  


//render your react application

