'use client'
import MisBitacoras from '@/components/MisBitacoras'
import Aside from '@/components/ui/Aside'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MiBitacoras = () => {

  const [bitacoras, setBitacoras] = useState([]);

  const [buscar, setBuscar] = useState('');

  useEffect(() => {
    const getBitacoras = async () => {
      const bitacora = await axios.get('http://localhost:3000/api/tasks');

      setBitacoras(bitacora.data);
    }
    getBitacoras();
  }, [])

  return (
    <div className='md:flex md:min-h-screen'>
      <Aside />

      <div className='md:w-4/5 md:h-screen overflow-scroll bg-white'>
        <h1 className='text-xl font-bold bg-lime-500 py-4 px-4'>Mis Bitacoras</h1>

        <div className='px-4 mt-4'>
          <label className='pr-2 font-bold' htmlFor="buscar">Search Date:</label>
          <input onChange={e => setBuscar(e.target.value)} className='py-2 border outline-none px-2 rounded-md' type="search" name="buscar" id="buscar" />
        </div>
        

        <div className='grid grid-cols-6 py-4 px-4'>
          {
            bitacoras.filter(date => date.fecha.includes(buscar)).map(bita => {
              return (
                <MisBitacoras 
                  key={bita.id}
                  bita={bita}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default MiBitacoras