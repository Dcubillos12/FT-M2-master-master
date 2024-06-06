import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';



const Timer = () => {

  const [segundos, setSegundos] = useState(0);//Nuestros segundos, los guardaremos en un state para poder mutarlos.
  const [activo, setActivo] = useState(false);//Un estado para llevar el control de nuestro boton de Inicio y Pausa.
  const [tipo, setTipo] = useState('Contador');//Por ultimo necesitaremos un estado para cambiar entre nuestro Contador y nuestra Cuenta Regresiva.
  const myRef = useRef(null);

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {//setInteval hace ejecutar una tarea cada tiempo que le pongamos 
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);//clearInterval limpia el intervalo
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);//dependencias se ejecuta la callback cuando se cambia alguna de las dependecias

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;
