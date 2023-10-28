import React from 'react'

const DatosUser = () => {
  return (
    <form className='h-70 px-8 py-12 bg-gray-50 shadow-sm hover:shadow-md rounded-md border-b-2 border-slate-300'>
      <div className='mb-4'>
        <label className='font-bold pr-2' htmlFor="user">Usuario: </label>
        <input className='py-1 px-2 outline outline-1 outline-slate-400 w-96 rounded-md text-gray-400' type="text" placeholder='Usuario' id='user' defaultValue={'Jaiber Restrepo Villa'} disabled />
      </div>

      <div className='mb-4'>
        <label className='font-bold pr-2' htmlFor="fecha">Fecha: </label>
        <input className='py-1 px-2 outline outline-1 outline-slate-400 w-96 rounded-md text-gray-400' type="fecha" placeholder='Fecha' id='fecha' defaultValue={'18-10-2023'} disabled />
      </div>

      <div className='mb-4'>
        <label className='font-bold pr-2' htmlFor="empleado">Empleado: </label>
        <input className='py-1 px-2 outline outline-1 outline-slate-400 w-96 rounded-md text-gray-400' type="text" placeholder='Empleado' id='empleado' defaultValue={'00004654'} disabled />
      </div>

      <div>
        <label className='font-bold pr-2' htmlFor="red">Usuario de Red: </label>
        <input className='py-1 px-2 outline outline-1 outline-slate-400 w-96 rounded-md text-gray-400' type="text" placeholder='Usuario de Red' id='red' defaultValue={'jairestrepo@metrodemedellin.gov.co'} disabled />
      </div>
    </form>
  )
}

export default DatosUser