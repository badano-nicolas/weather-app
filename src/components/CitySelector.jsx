import React from 'react';
import cities from '../lib/cities.json'

const CitySelector = () => {
  return (
    <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col mt-5'>

      <p className='text-[#00df9a] font-bold p-2'>
        VER EL TIEMPO EN OTRAS CIUDADES
      </p>



      <div className='w-full'>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <select class="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="City selector">
              <option selected>Ciudad actual</option>
              {cities.map((city) => {
                return (
                  <option value={city.id} key={city.id}>{city.name}</option>
                )})}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitySelector
