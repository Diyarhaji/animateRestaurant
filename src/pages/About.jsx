import React from 'react'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
import images from '../assets/images'



import { MdOutlineTaskAlt } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { RxComponent1 } from "react-icons/rx";




const About = () => {
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
    <section id='about' className="h-auto w-full">
      <div className="grid max-sm:grid-cols-1 grid-cols-2 max-sm:mt-5 max-sm:px-[5%] gap-10 mt-20">
        <div className="relative max-sm:mt-3 max-sm:order-2">
                        <div className="group relative max-sm:w-[300px] max-sm:h-[500px] w-[400px]  h-[600px] mx-auto rounded-full  overflow-hidden">
                      <div className={hoverEffectClass} > 
                        <img src={images.about} alt="" className="w-full h-full rounded-full" />
                      </div>
        
                      
                      </div>
                      <div className="w-[130px] max-sm:w-[100px] max-sm:h-[100px] overflow-hidden group  h-[130px] rounded-full absolute max-sm:-left-3 bottom-20 left-10 z-10 bg-white p-2">
                        <div className={hoverEffectClass} > 
                        <img src={images.aboutP} alt="" className="w-full h-full rounded-full" />
                      </div>
                      </div>
        
                       <div className="w-[130px] text-center animate-rightToLeft max-sm:-right-9  overflow-hidden group  h-[130px] rounded-lg text-white absolute top-20 right-6 z-10 text-xl  bg-first p-3">
                        <div className="before:content-[''] before:absolute before:inset-0 before:w-ful before:h-full before:bg-white before:text-first before:-z-10  before:translate-y-40 hover:text-first before:transition-all before:duration-500  group-hover:before:translate-y-0">
                            <FaMedal className='mx-auto'/>
                           <p className="mt-2">30 years of experience</p>
                        </div>
                        
                      </div>
                      
                      
        </div> 

        <div className="mt-20 max-sm:order-1">
          <Title text="About Us"/>
          <h1 className="mt-5 max-sm:text-3xl text-4xl">OUR COMMITMENT TO AUTHENTICITY <span className="text-first">& EXCELLENCE</span> </h1>
          <p className="mt-5 text-lg max-w-xl ">Every dish we create is a celebration of connection, crafted with passion and inspired by diverse flavors. Join us in an inviting space where every bite sparks joy and every moment becomes a cherished memory.</p>

          <ul className="mt-10">
            <li className="flex gap-3 items-center mt-2 max-sm:text-lg max-sm:mt-4 text-xl"><MdOutlineTaskAlt className='text-first'/> Seasonal & Locally Sourced Ingredients</li>
            <li className="flex gap-3 items-center mt-2 max-sm:text-lg max-sm:mt-4 text-xl"><MdOutlineTaskAlt className='text-first'/>Vegetarian & Dietary-Friendly Options</li>
            <li className="flex gap-3 items-center mt-2 max-sm:text-lg max-sm:mt-4 text-xl"><MdOutlineTaskAlt className='text-first'/> Exquisite Pairings & Unique Flavors</li>
          </ul>
          <div className=" mt-10 flex gap-5">
           <a href="#contact" className=""><Button text="Order Now"/></a> 
          <a href="#menu" className=""><Button2 text="Read More"/></a> 
          </div>
        </div>
      </div>

      <div className="border-t border-second max-sm:grid-cols-1 mt-20 grid grid-cols-3 gap-4 px-[4%] py-10">
        <div className="flex gap-3 max-sm:mt-5 max-sm:gap-6  group">
          <div className="border border-first p-3 rounded-full"><img src={images.dinner} alt="" className="w-[50px] group-hover:animate-spanOne" /></div>
          <div className="">
            <h2 className="text-xl ">Premium Dining</h2>
            <p className="max-w-[250px] ">It's very personal, and can only be a positive experience.</p>
          </div>
        </div>
         <div className="flex gap-3 max-sm:mt-5 max-sm:gap-6 group">
          <div className="border border-first p-3 rounded-full"><img src={images.ingredient} alt="" className="w-[50px] group-hover:animate-spanOne" /></div>
          <div className="">
            <h2 className="text-xl ">Abundant Flavors</h2>
            <p className="max-w-[250px] ">At secret recipe, we take immense pride in crafting.</p>
          </div>
        </div>
         <div className="flex gap-3 max-sm:mt-5 max-sm:gap-6 group">
          <div className="border border-first p-3 rounded-full"><img src={images.service} alt="" className="w-[50px]  group-hover:animate-spanOne" /></div>
          <div className="">
            <h2 className="text-xl ">Premium Dining</h2>
            <p className="max-w-[250px] ">With local ingredients, unique spins on traditional flavors.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
