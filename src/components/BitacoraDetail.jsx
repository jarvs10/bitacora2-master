import React from 'react'

const BitacoraDetail = ({bitacora}) => {

  const {oes, fecha, actividades, turno, oes2, turno2, actividades2} = bitacora;

  return (
    <div className='w-[70%] rounded-md shadow-md mx-auto py-10 px-6'>
      <h1 className='text-3xl font-bold text-center mb-10'>Actividades Diarias</h1>
      <div className='mb-6'>
        <p className='font-bold mb-2'>Nombre OES/AOES T1: <span className='font-normal text-lg'>{oes}</span></p>
        <p className='font-bold mb-2'>Fecha: <span className='font-normal text-lg'>{fecha}</span></p>
        <p className='font-bold mb-2'>Turno: <span className='font-normal text-lg'>{turno}</span></p>
        <p className='font-bold mb-3'>Actividades:</p>
        <textarea className='border py-1 px-2 rounded-md capitalize' defaultValue={actividades} cols="40" rows="8"></textarea>
      </div>

      <div>
        <p className='font-bold mb-2'>Nombre OES/AOES T2: <span className='font-normal text-lg'>{oes2}</span></p>
        <p className='font-bold mb-2'>Fecha: <span className='font-normal text-lg'>{fecha}</span></p>
        <p className='font-bold mb-2'>Turno: <span className='font-normal text-lg'>{turno2}</span></p>
        <p className='font-bold mb-3'>Actividades:</p>
        <textarea className='border py-1 px-2 rounded-md capitalize' defaultValue={actividades2} cols="40" rows="8"></textarea>
      </div>

      <div className='flex justify-end mt-6'>
        <button className='py-2 px-6 bg-lime-500 hover:bg-lime-700 font-bold rounded-md'>Editar</button>
      </div>
    </div>
  )
}

export default BitacoraDetail