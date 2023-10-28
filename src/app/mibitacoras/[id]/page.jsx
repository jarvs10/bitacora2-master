'use client'
import BitacoraDetail from '@/components/BitacoraDetail'
import Aside from '@/components/ui/Aside'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BitacoraId = ({params}) => {

  const [bitacora, setBitacora] = useState({});

  useEffect(() => {
    const getBitacora = async () => {
      const result = await axios.get(`http://localhost:3000/api/tasks/${params.id}`);

      setBitacora(result.data);
    }
    getBitacora();
  }, [])

  return (
    <div className='md:flex md:min-h-screen'>
      <Aside />

      <div className='md:w-4/5 md:h-screen overflow-scroll bg-white'>
        <h1 className='text-xl font-bold bg-lime-500 py-4 px-4'>Bitacora {bitacora.fecha}</h1>

        <div>
          <BitacoraDetail 
            bitacora={bitacora}
          />
        </div>
      </div>
    </div>
  )
}

export default BitacoraId