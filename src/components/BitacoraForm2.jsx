import React from 'react'

const BitacoraForm2 = ({ handleChange, setFile, file, bitacora }) => {

  const { oes2, turno2, actividades2 } = bitacora;

  return (
    <>
      <div className="sm:col-span-2">
        <label htmlFor="oes2" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nombre OES/AOES</label>
        <input onChange={handleChange} value={oes2} type="text" name="oes2" id="oes2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre OES/AOES" />
      </div>

      <div className="w-full">
        <label htmlFor="turno2" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Turno</label>
        <select onChange={handleChange} value={turno2} id='turno2' name='turno2' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
          <option value="turno 2">T2</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="actividades2" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Actividades</label>
        <textarea onChange={handleChange} value={actividades2} id="actividades2" name='actividades2' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descripcion aqui"></textarea>
      </div>

      <div>
        <label className="block mb-2 font-bold">Anexa Imagen, solo si es necesario</label>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" id='imagen' name='imagen' className="block w-96 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-lime-500 file:text-black
            hover:file:bg-lime-600 border rounded-md overflow-hidden mb-4"/>

        {
          file && <img className='block' src={URL.createObjectURL(file)} alt="img" />
        }
      </div>
    </>

  )
}

export default BitacoraForm2