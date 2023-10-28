'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const MisBitacoras = ({bita}) => {

  const {id, oes, fecha} = bita

  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push(`/mibitacoras/${id}`)} className='bg-lime-600 text-white font-black py-2 px-6 hover:bg-lime-800 rounded-md shadow-md'>{fecha}</button>
    </div>
  )
}

export default MisBitacoras