import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities)
  return <div>{
    cities.map(ciu => (
      <Card
          key={ciu.sys.id}
          name={ciu.name} 
          max={ciu.main.temp_max} 
          min={ciu.main.temp_min} 
          img={ciu.weather[0].icon}
      />
    ))
  }
  </div>
};