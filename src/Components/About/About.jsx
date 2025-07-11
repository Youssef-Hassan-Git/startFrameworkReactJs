import React from 'react'

export default function About() {
  return (
    <>
          <div className='bg-[#1ABC9C] py-29'>
            <div>
              <h2 className='text-white  uppercase font-bold text-center text-[40px] relative after:absolute after:w-25  after:h-1 after:bg-white after:top-20 after:right-20 before:left-20 md:after:right-136 before:absolute before:h-1 before:w-25 before:bg-white before:top-20 md:before:left-136'>about component</h2>
              <div className='flex justify-center'>
              <i class="fa-solid fa-star text-white text-xl pt-3"></i>
              </div>

            </div>

        <div className='md:flex  py-5'>
            <div className='w-full md:w-6/12  md:max-w-[400px] mx-auto'>
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

            
            <div className='w-full md:w-6/12  md:max-w-[400px] mx-auto'>
            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>


          </div>
    </>
  )
}
