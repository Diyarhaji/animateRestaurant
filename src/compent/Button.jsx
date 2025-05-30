import React from 'react'
import  {FaArrowRight}  from "react-icons/fa";
import '../App.css'
const Button = ({text}) => {
  return (
    <div className='overflow-hidden'>
      <button className="bg-first text-white flex gap-2 items-center py-2 px-4 text-md rounded-full font-serif font-bold relative before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:top-[50%] before:left-[50%] before:rounded-[30px_10px_500px_100px] before:-translate-x-[170%] z-30 hover:before:-translate-x-[50%] transition-all before:transition-all duration-500  before:duration-500 before:-z-10 hover:text-first before:-translate-y-[50%] before:bg-white overflow-hidden ">
        {text} <FaArrowRight className='w-3'/>
      </button>
    </div>
  )
}

export default Button
