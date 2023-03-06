
import React, { useState, useEffect } from "react";
import Botones from "./botones.jsx"




let cuentaAtrás = {
	icono: <i className="fa-solid fa-clock-rotate-left"></i>,
	nombre: "Cuenta atrás",

}
let play = {
	icono: <i className="fa-regular fa-circle-play"></i>,
	nombre: "Play",

}

let pausa = {
	icono: <i className="fa-regular fa-circle-pause"></i>,
	nombre: "Pausa",

}
let reset = {
	icono: <i className="fa-solid fa-power-off"></i>,
	nombre: "Reset",

}

//create your first component
const Home = () => {

	const [count, setCount] = useState(0);
	const [countStr, setCountStr] = useState('');
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		setCountStr(count.toString());
	}, [count]);

	// AUMENTAR CONTADOR



	function handlePlay() {
		clearInterval(intervalId);
		const newInterval = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1000);
		setIntervalId(newInterval);

	}

	// RESTAR CONTADOR

	function handleRest() {
		clearInterval(intervalId);
		const newInterval = setInterval(() => {
			setCount(prevCount => prevCount - 1);
		}, 1000);
		setIntervalId(newInterval);
	}

	// REINICIAR CONTADOR

	function handleReset() {
		clearInterval(intervalId);
		setCount(0);
	}

	// PAUSAR CONTADOR
	function handlePause() {
		clearInterval(intervalId);
		setIntervalId(null);
	}



	return (
		<div className="text-center">
			<h1> WELCOME TO THE SIMPLE COUNTER!</h1>
			<div className="container">
				{(countStr === "10") ? alert("Hola Cristian, se ha terminado el tiempo xD") : null }
					
			</div>
			<div className="container " id="contador">
				<div className="reloj mx-2 "><i class="fa-regular fa-clock fa-sm"></i></div>
				<div className=" mx-2">{countStr[countStr.length - 6] || 0}</div>
				<div className=" mx-2">{countStr[countStr.length - 5] || 0}</div>
				<div className=" mx-2">{countStr[countStr.length - 4] || 0}</div>
				<div className=" mx-2">{countStr[countStr.length - 3] || 0}</div>
				<div className=" mx-2">{countStr[countStr.length - 2] || 0}</div>
				<div className=" mx-2">{countStr[countStr.length - 1] || 0} </div>
			</div>
			<div>
				<h4><i className="fa-solid fa-angles-down"></i> Play to Start<i className="fa-solid fa-angles-down"></i></h4>
			</div>
			<div className="d-flex position-absolute top-75 start-50 translate-middle">
				<Botones funcionalidad={handleRest} icono={cuentaAtrás.icono} nombre={cuentaAtrás.nombre} />
				<Botones funcionalidad={handlePlay} icono={play.icono} nombre={play.nombre} />
				<Botones funcionalidad={handlePause} icono={pausa.icono} nombre={pausa.nombre} />
				<Botones funcionalidad={handleReset} icono={reset.icono} nombre={reset.nombre} />
			</div>
		</div>
	)

};

export default Home;
