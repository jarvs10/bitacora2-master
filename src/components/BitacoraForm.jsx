import React from 'react'
import BitacoraForm2 from './BitacoraForm2';

const BitacoraForm = ({ bitacora, handleChange, handleSubmit, setFile, file }) => {

  const { oes, turno, fecha, actividades } = bitacora;

  return (
    <section className="bg-white border shadow-md dark:bg-gray-900">
      <h1 className='text-xl font-bold bg-lime-500 py-4 px-4'>Bitacora Metro</h1>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

            <div className="sm:col-span-2">
              <label htmlFor="oes" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nombre OES/AOES</label>
              <input onChange={handleChange} value={oes} type="text" name="oes" id="oes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre OES/AOES" />
            </div>

            <div className="w-full">
              <label htmlFor="turno" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Turno</label>
              <select onChange={handleChange} id='turno' name='turno' value={turno} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
                <option value="turno 1">T1</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="fecha" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Fecha</label>
              <input onChange={handleChange} value={fecha} type="date" name="fecha" id="fecha" min={'2023-10-27'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="actividades" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Actividades</label>
              <textarea onChange={handleChange} value={actividades} id="actividades" name='actividades' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descripcion aqui"></textarea>
            </div>

            <BitacoraForm2 
              bitacora={bitacora}
              handleChange={handleChange}
              file={file}
              setFile={setFile}
            />

          </div>

          <div className='mt-6 flex justify-end'>
            <input className='py-2 bg-lime-500 hover:bg-lime-700 font-bold rounded-md px-6 cursor-pointer' type="submit" value="Agregar Bitacora" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default BitacoraForm