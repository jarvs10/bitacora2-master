import React from 'react'
import DatosUser from './DatosUser'
import Cards from './Cards'

const MainWindow = () => {
  return (
    <div>
      <h1 className='text-xl font-bold bg-lime-500 py-4 px-4'>Servicio al Cliente</h1>

      <DatosUser />

      <Cards />
    </div>
  )
}

export default MainWindow