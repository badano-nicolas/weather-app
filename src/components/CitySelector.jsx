import React from 'react';
import cities from '../lib/cities.json';
import Select from 'react-select'

const CitySelector = ({ selectorChanged }) => {

  const handleSelectChange = (event) => {
    selectorChanged(event.value);
  }

  return (
    <div className='max-w-[800px] w-full mx-auto text-center flex flex-col py-8'>
      <p className='text-[#00df9a] font-bold p-2'>
        VER EL TIEMPO EN OTRAS CIUDADES
      </p>
      <div className='w-full'>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <Select
              options={cities.map(sup => (({ label: sup.name, value: sup })))}
              onChange={handleSelectChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitySelector