import React from 'react'
import images from '../assets/images'
import  {FaArrowRight}  from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { RxComponent1 } from "react-icons/rx";
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';

import '../App.css'
const Hero = () => {
  const hoverEffectClass = `
  relative w-full h-full
                before:w-3/5 before:rotate-45
                before:content-['']
                before:absolute
                before:h-[400%]
                before:bg-[linear-gradient(to_right,transparent_0%,white_50%,transparent_100%)]
                before:top-[50%] before:left-[50%]
                before:-translate-x-[50%] before:-translate-y-[100%]  group-hover:before:translate-y-[100%]
                group-hover:before:transition-all group-hover:before:duration-[3s]
`;
  return (

      <section id='home' className='bg-home1 w-full h-screen relative '>


        <div className="bg-black grid max-sm:grid-cols-1 max-sm:py-20 grid-cols-2 gap-10 bg-opacity-50 px-[4%] py-20 absolute inset-0">
          <div className="mt-[4rem]">
            <Title text='Art Of Fine Dining'/>
          <h1 className="mt-2 text-6xl max-sm:text-4xl tracking-wide font-bold leading-[60px] max-w-2xl">DINING REDEFINED WITH <span className="text-first">EVERY BITE</span> </h1>
          <p className="max-w-xl text-lg mt-4">Immerse yourself in a dining experience like no other, where every dish is a masterpiece of flavor, crafted with care and precision. From the freshest ingredients.</p>
          <div className=" mt-10 flex gap-5">
           <a href="#contact" className=""><Button text="Book A Tabel"/></a> 
          <a href="#menu" className=""><Button2 text="View our Menu"/></a> 
          </div></div>

            <div className="ml-7 max-sm:hidden">
              <div className="relative">
                <div className="group relative w-[380px]  h-[550px] mx-auto rounded-full  overflow-hidden">
              <div className={hoverEffectClass} > 
                <img src={images.hero} alt="" className="w-full h-full rounded-full" />
              </div>
 
              
              </div>
              <div className="w-[130px] animate-topToBottom overflow-hidden group  h-[130px] rounded-full absolute top-20 left-6 z-10 bg-white p-2">
                <div className={hoverEffectClass} > 
                <img src={images.heroOne} alt="" className="w-full h-full rounded-full" />
              </div>
              </div>

               <div className="w-[130px] animate-Bottom overflow-hidden group  h-[130px] rounded-full absolute bottom-20 right-6 z-10 bg-white p-2">
                <div className={hoverEffectClass} > 
                <img src={images.heroTwo} alt="" className="w-full h-full rounded-full" />
              </div>
              </div>
              
              
              </div> 
        </div>
          
        </div>

       
      
        

       
        

        
        
      </section>
     
    
  )
}

export default Hero
