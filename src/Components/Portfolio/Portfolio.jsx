import React from 'react'
import { useState } from 'react'
import port1 from "../../assets/port1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"
import port4 from "../../assets/port4.png"
import port5 from "../../assets/port5.png"
import port6 from "../../assets/port6.png"



export default function Portfolio() {

const [allImgs, setallImgs] = useState([
  { imgPath: port1, idx:0 },
  { imgPath: port2, idx:1 },
  { imgPath: port3, idx:2 },
  { imgPath: port4, idx:3 },
  { imgPath: port5, idx:4},
  { imgPath: port6, idx:5 },
])

const [selectedImg, setSelectedImg] = useState(null);


function imgDetails(idx){

 setSelectedImg(allImgs.find(img => img.idx === idx));

}


  return (
    <>
                  <div  className='pt-4'>
              <h2 className='  uppercase font-bold text-center text-[40px] relative after:absolute after:w-25  after:h-1 after:bg-black after:top-20 after:right-20 before:left-20 md:after:right-136 before:absolute before:h-1 before:w-25 before:bg-black before:top-20 md:before:left-136'>Portfolio Section</h2>
              <div className='flex justify-center'>
              <i className="fa-solid fa-star  text-xl pt-3"></i>
              </div>

            </div>


            <div className='flex flex-row flex-wrap container'>

                {allImgs.map((item, idx) => {
                  return (

                  <div key={idx}  className='md:w-4/12 w-full p-3'  onClick={()=> imgDetails(idx)}>

                    <div className='p-3 relative group'>


                    <img src={item.imgPath} alt='Portfolio' className='w-full img'/>


                    <div className='p-3 absolute  top-3 left-3 right-3 bottom-3  opacity-0 hover:bg-[#37A992]/60 hover:opacity-100 flex justify-center items-center bg-op '>
                          <i  class=" fa-solid fa-plus text-white text-8xl "></i>
                    </div>

                    </div>

                    

                  </div>
                                 
                  
                  )})}


            </div>
      
      {/* Modal */}
        {selectedImg ? 
            <div className='w-full bg-[#37A992]/60 h-screen fixed top-0 left-0 right-0 bottom-0  flex justify-center items-center'>
              <div className='relative'>
                <img src={selectedImg.imgPath} alt="" className='w-140' />
                <div className='absolute top-0 right-1'>
                  <i className="fa-solid fa-xmark text-5xl text-white" onClick={()=> setSelectedImg(null)}></i>
                </div>
              </div>
            </div> : ""}


    </>
  )
}
