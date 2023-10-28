import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div className='mt-4 bg-gray-50 grid md:grid-cols-3 lg:grid-cols-4 gap-2 m-0 py-8 rounded-md border px-1'>

      <div className='bg-lime-500 w-80 h-40 py-4 px-6 border flex justify-between relative rounded-md shadow-sm cursor-pointer hover:scale-105'>
        <h1 className='text-xl font-bold'>Avisos PM</h1>
        <Image className='w-16 h-16 absolute bottom-6 right-2 text-amber-500' src={'/img/check-list.png'} width={100} height={100} alt='icono' />
      </div>

      <div className='bg-lime-500 w-80 h-40 py-4 px-6 border flex justify-between relative rounded-md shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out'>
        <h1 className='text-xl font-bold w-7/12'>Calendario de Actividades</h1>
        <Image className='w-16 h-16 absolute bottom-6 right-2 text-amber-500' src={'/img/calendar.png'} width={100} height={100} alt='icono' />
      </div>

      <Link href={'/bitacora'} passHref>
        <div className='bg-lime-500 w-80 h-40 py-4 px-6 border flex justify-between relative rounded-md shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out'>
          <h1 className='text-xl font-bold'>Bitácora</h1>
          <Image className='w-16 h-16 absolute bottom-6 right-2 text-amber-500' src={'/img/logbook.png'} width={100} height={100} alt='icono' />
        </div>
      </Link>

      <div className='bg-lime-500 w-80 h-40 py-4 px-6 border flex justify-between relative rounded-md shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out'>
        <h1 className='text-xl font-bold w-7/12'>Asignación de Seguridad</h1>
        <Image className='w-16 h-16 absolute bottom-6 right-2 text-amber-500' src={'/img/policia.png'} width={100} height={100} alt='icono' />
      </div>

      <div className='bg-lime-500 w-80 h-40 py-4 px-6 border flex justify-between relative rounded-md shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out'>
        <h1 className='text-xl font-bold w-7/12'>Reporte de Luminarias</h1>
        <Image className='w-16 h-16 absolute bottom-6 right-2 text-amber-500' src={'/img/luz.png'} width={100} height={100} alt='icono' />
      </div>
    </div>
  )
}

export default Cards