'use client'
import BitacoraForm from '@/components/BitacoraForm'
import Aside from '@/components/ui/Aside'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BitacoraPage = () => {

  const [file, setFile] = useState(null);

  const [bitacora, setBitacora] = useState({
    oes: '',
    oes2: '',
    turno: 'T1',
    turno2: 'T2',
    fecha: '',
    actividades: '',
    actividades2: '',
    imagen: file
  })

  const { oes, oes2, turno, turno2, fecha, actividades, actividades2 } = bitacora;

  const handleChange = ({ target: { name, value } }) => {
    setBitacora({ ...bitacora, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oes === ''|| oes2 === '' || turno === '' || turno2 === '' || fecha === '' || actividades === '' || actividades2 === '') {
      toast.error('Todos los campos son necesarios');

      return;
    }

    console.log(bitacora);

    try {
      await axios.post('http://localhost:3000/api/tasks', bitacora);

      toast.success('Datos enviados correctamente');

    } catch (error) {
      console.log(error.message);
    }

    setBitacora({
      oes: '',
      oes2: '',
      turno: 'T1',
      turno2: 'T2',
      fecha: '',
      actividades: '',
      actividades2: '',
      imagen: ''
    })
  }

  return (
    <div className='md:flex md:min-h-screen'>
      <Aside />

      <div className='md:w-4/5 md:h-screen overflow-scroll bg-white'>
        <BitacoraForm
          file={file}
          bitacora={bitacora}
          setFile={setFile}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default BitacoraPage