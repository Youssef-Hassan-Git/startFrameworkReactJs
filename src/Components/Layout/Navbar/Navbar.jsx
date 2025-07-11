  import React, { useState } from 'react'
  import { Link, useLocation } from 'react-router-dom'

  export default function Navbar() {
      const  [show, setshow] = useState(false)

      const location = useLocation();
      

  function display(){
      setshow(!show);
  }

    return (
      <>
      <div className='w-full bg-[#2C3E50] p-8.5 '>
        <div className=' md:max-w-[1100px] mx-auto md:flex md:justify-between md:items-center font-bold'>
        
          <div>
              <Link to= "/home" className='uppercase text-3xl text-white no-underline '>Start Framework</Link>
          </div>
          <div className='hidden md:flex  md:flex-row mt-3 md:justify-center md:gap-6 gap-5'>
              <Link to="/about" className={`text-lg uppercase text-white no-underline ${location.pathname==="/about"? "bg-[#1ABC9C] text-white rounded-sm p-1 " : "" }`}>About</Link>
              <Link to= "/portfolio" className={`text-lg uppercase text-white no-underline ${location.pathname==="/portfolio"? "bg-[#1ABC9C] text-white rounded-sm p-1 " : "" }`}>Portfolio</Link>
              <Link to= "/contact" className={`text-lg uppercase text-white no-underline ${location.pathname==="/contact"? "bg-[#1ABC9C] text-white rounded-sm p-1 " : "" }`}>Contact</Link>

          </div>

          <button onClick={display} className=' md:hidden text-white text-4xl p-5 '>☰</button>
          {show? (
          <div className='flex flex-col md:hidden mt-3 md:justify-center md:gap-6 gap-5'>
              <Link to="/about" className={`text-lg uppercase text-white no-underline ${location.pathname==="/about"? "bg-[#1ABC9C] text-white rounded-sm p-1" : "" }`}>About</Link>
              <Link to= "/portfolio" className={`text-lg uppercase text-white no-underline ${location.pathname==="/portfolio"? "bg-[#1ABC9C] text-white rounded-sm p-1 " : "" }`}>Portfolio</Link>
              <Link to= "/contact" className={`text-lg uppercase text-white no-underline ${location.pathname==="/contact"? "bg-[#1ABC9C] text-white rounded-sm p-1 " : "" }`}>Contact</Link>
          </div>
          ) : null}

        </div>
      </div>




      </>
    )
  }
