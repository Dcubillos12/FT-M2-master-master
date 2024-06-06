import React from 'react';


export default function SearchBar(props) {
  // acá va tu código
  console.log(props.onSearch)
  return <div>
  <input placeholder='Ciudad...'></input>
  <button onClick={() => props.onSearch()}>Agregar</button>
  </div>
};