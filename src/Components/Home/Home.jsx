import React from 'react'
import avataaars from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <>
    <div className='bg-[#1ABC9C]'>
      <img src={avataaars} className='w-65 mx-auto pt-7  pb-8 '  alt="profile picture" />
      <div>
        <h2 className='text-white uppercase font-bold text-center text-[40px] relative after:absolute after:w-25  after:h-1 after:bg-white after:top-20 after:right-20 before:left-20 md:after:right-136 before:absolute before:h-1 before:w-25 before:bg-white before:top-20 md:before:left-136'>Start Framework</h2>
        <div className='flex justify-center'>
        <i class="fa-solid fa-star text-white text-xl pt-3"></i>
        </div>
        <p className='text-center text-white pt-3 pb-10'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
      
    </>
  )
}
