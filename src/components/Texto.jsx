import React from 'react'
// Componente del div de respuesta
export const Texto = ({contenido}) => {
  return (
    <div className='border w-50 mx-auto text-start p-2 rounded my-2' key={contenido}>{contenido}</div>
  )
}
