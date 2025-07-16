import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-[#2C3E50] '>

        <div className='w-full mx-auto md:max-w-[1250px] md:flex md:flex-row justify-between items-center p-6'>
          
          <div className='w-full md:w-4/12  '>
          <div className='flex flex-col items-center py-9 '>
            <h3 className='text-white uppercase text-2xl font-semibold p-2'>Location</h3>
            <p className='text-white p-2'>2215 John Daniel Drive</p>
            <p className='text-white pt-2'>Clark, MO 65243</p>
          </div>
          </div>

          <div className='w-full md:w-4/12 '>
          <div className='flex flex-col  items-center'>
            <h3 className='text-white uppercase text-2xl font-semibold  mx-auto'>AROUND THE WEB</h3>
            <div className='flex flex-row  pt-5 '>
              <i className="fa-brands fa-facebook text-white text-md p-2 border-2 border-white rounded-full me-4  "></i>
              <i className="fa-brands fa-twitter text-white text-md p-2 border-2 border-white rounded-full me-4"></i>
              <i className="fa-brands fa-linkedin-in text-white text-md p-2 border-2 border-white rounded-full me-4"></i>
              <i className="fa-solid fa-globe text-white text-md p-2 border-2 border-white rounded-full me-4"></i>
            </div>
          </div>
          </div>


          <div className='w-full md:w-4/12 '>
           <div className='flex flex-col items-center justify-center '>
            <h3 className='text-white uppercase text-2xl font-semibold mx-auto p-8 md:pb-8'>ABOUT FREELANCER</h3>
            <p className='text-white text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
           </div>
          </div>


        </div>
      </div>

    <div className='bg-[#1A252F]'>
    <p className='text-white text-center py-7'>Copyright © Your Website 2021</p>
    </div>

    </>
  )
}
