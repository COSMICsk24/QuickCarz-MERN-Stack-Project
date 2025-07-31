import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Hero = () => {

  const [PickupLocation, setPickupLocation] = useState('')

  const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

  const handleSearch = (e)=>{
    e.preventDefault()
    navigate('/cars?pickupLocation=' + PickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>
        Luxury Cars for Rent
      </h1>

      <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8'>
          <div className='flex flex-col items-start gap-2'>
            <select
              required
              value={PickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className='px-3 py-2 border border-gray-300 rounded-md text-sm'
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className='px-1 text-sm text-gray-500'>
              {PickupLocation ? PickupLocation : 'Please select location'}
            </p>
          </div>

          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='pickup-date'>Pickup Date</label>
            <input
              value ={pickupDate} onChange={e=>setPickupDate(e.target.value)}
              type='date'
              id='pickup-date'
              className='px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500'
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='return-date'>Return Date</label>
            <input
              value ={returnDate} onChange={e=>setReturnDate(e.target.value)}
              type='date'
              id='return-date'
              className='px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500'
              required
            />
          </div>
        </div>

        <button className='flex items-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
          <img src={assets.search_icon} className='brightness-300' alt="Search" />
          Search
        </button>
      </form>

      <img src={assets.main_car} alt="car" className='max-h-72' />
    </div>
  )
}

export default Hero
