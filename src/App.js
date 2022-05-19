// importacion de recursos/componentes/archivos
import React, { useState } from 'react';
import './App.css';
import { Texto } from './components/Texto';


function App() {
  // Variables con useState
  const [inputText, setInputText] = useState()
  const [array, setArray] = useState([])
  // Funcion para obtener el valor del input de ingreso
  const setInput = (e) => {
    setInputText(e.target.value)
  }
  // Funcion para consumir la API
  const consumirApi = async (e) => {
    e.preventDefault() // Evita que se recargue la pagina
    fetch("https://desolate-refuge-56131.herokuapp.com/" + inputText) // Endpoint
      .then(res => res.json()) // recibiendo la respuesta en formato JSON
      .then(res => setArray([res.text, ...array])) // Agregando la respueta al inicio del array sacando el dato del JSON
    setInputText("") // limpiando el input de ingreso
  }

  return (
    <div className="App">
      {/* Div del formulario */}
      <div className='bg-danger p-3'>
        <form className='d-flex justify-content-center' onSubmit={consumirApi}>
          {/* Input de ingreso */}
          <input type="text" className='form-control w-50 me-3' placeholder="Insertar Texto" onChange={setInput} value={inputText}/>
          {/* Boton de envio */}
          <input type="submit" className='btn btn-primary' value={'Enviar'}/>
        </form>
      </div>
      {/* Div de las respuestas */}
      <div className='w-75 p-5 mx-auto mt-5 border bg-white'>
        <h2 className='text-start'>Resultados:</h2>
        {/* Listando las respuestas que estan almacenadas en el array */}
        { array.map(texto => <Texto key={texto} contenido={texto}/>) } 
      </div>
    </div>
  );
}

export default App;
