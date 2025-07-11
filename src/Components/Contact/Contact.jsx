import React from 'react'

export default function Contact() {
  return (
    <>
                  
                  
            <div  className='pt-4'>
              <h2 className='  uppercase font-bold text-center text-[40px] relative after:absolute after:w-25  after:h-1 after:bg-black after:top-20 after:right-20 before:left-20 md:after:right-136 before:absolute before:h-1 before:w-25 before:bg-black before:top-20 md:before:left-136'>Contact Section</h2>
              <div className='flex justify-center'>
              <i class="fa-solid fa-star  text-xl pt-3"></i>
              </div>

            </div>


            <div className='text-center pt-20 flex flex-col items-center'>
              <input type="text"  placeholder='userName' className='border-b-2  rounded-l-lg rounded-r-lg border-[#DFE3E7] w-full md:max-w-150 p-2 m-5 focus:border-b-2 focus:rounded-l-lg focus:rounded-r-lg focus:outline-none'/>
              <input type="text"  placeholder='userAge' className='border-b-2  rounded-l-lg rounded-r-lg border-[#DFE3E7] w-full md:max-w-150 p-2 m-5 focus:border-b-2 focus:rounded-l-lg focus:rounded-r-lg focus:outline-none'/>
              <input type="text"  placeholder='userEmail' className='border-b-2  rounded-l-lg rounded-r-lg border-[#DFE3E7] w-full md:max-w-150 p-2 m-5 focus:border-b-2 focus:rounded-l-lg focus:rounded-r-lg focus:outline-none'/>
              <input type="text"  placeholder='userPassword' className='border-b-2  rounded-l-lg rounded-r-lg border-[#DFE3E7] w-full md:max-w-150 p-2 m-5 focus:border-b-2 focus:rounded-l-lg focus:rounded-r-lg focus:outline-none'/>
            </div>
            <div className=' max-w-[590px] mx-auto m-5 pb-6'>
            <button className='bg-[#1ABC9C] p-2 text-white rounded-lg self-start hover:bg-[#38ac94]'>send Message</button>

            </div>
    </>
  )
}
