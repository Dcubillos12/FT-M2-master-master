import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <h1>{props.name}</h1>
    <h4>Max {props.max}</h4>
    <h4>Min {props.min}</h4>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img clima"></img>
    <button> X {props.onClose}</button>
  </div>
};