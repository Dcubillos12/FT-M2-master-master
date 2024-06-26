const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoImpar, incrementoAsync } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);
//console.log(store)

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor')
//console.log(valor)

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let { contador } = store.getState()
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = contador
  //console.log(contador)
}

// Ejecutamos la funcion 'renderContador':
renderContador()


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador)


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

document.querySelector('#incremento').addEventListener('click', () =>{
  store.dispatch(incremento())
})

document.querySelector('#decremento').addEventListener('click', () => {
  store.dispatch(decremento())
} )

document.querySelector('#incrementoImpar').addEventListener('click', () => {
  store.dispatch(incrementoImpar())
})

document.querySelector('#incrementoAsync').addEventListener('click', () => {
  setTimeout(() => store.dispatch(incrementoAsync()), 3000)
})