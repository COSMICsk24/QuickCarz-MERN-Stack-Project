import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div
      className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden p-6'
      style={{
        background: 'linear-gradient(to right, #0558FE, #A9CFFF)',
      }}
    >
      <div className='text-white max-w-xl'>
        <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
        <p className='mt-2'>
          Monetize your vehicle effortlessly by listing it on our platform.
        </p>
        <p className='mt-1'>
          We take care of insurance, driver verification, and secure payments — so you can relax and earn with ease.
        </p>
        <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-blue-700 font-medium rounded-lg text-sm mt-4 cursor-pointer'>
          List Your Car
        </button>
      </div>
      <img
        src={assets.banner_car_image}
        alt='car'
        className='max-h-[180px] mt-10 md:mt-0'
      />
    </div>
  );
};

export default Banner;
