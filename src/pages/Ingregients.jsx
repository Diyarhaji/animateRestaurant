import React from 'react'
import { FaMedal } from "react-icons/fa6";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import images from '../assets/images'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
import { CiCirclePlus } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const Ingregients = () => {
  return (
   <section id='ingredients' className=" px-[3%] bg-bgthree h-auto w-full ">
    <div className="grid grid-cols-2 max-sm:grid-cols-1 py-20 gap-5 ">
         <div className="relative overflow-hidden max-sm:order-2">
            <img src={images.ingredients} alt="" className="w-[500px]" /> 
              <div className="max-w-max animate-rightToLeft group overflow-hidden absolute bottom-1 max-sm:right-1 right-20 max-sm:py-2 max-sm:px-4 max-sm:-bottom-1 py-5 px-7 rounded-lg bg-first before:content-[''] before:absolute before:inset-0 before:bg-white before:rounded-lg z-20 before:-z-10  before:text-black before:translate-y-[100%] hover:before:text-black before:transition-all before:duration-500 hover:before:translate-y-0">
                  <h1 className="text-xl group-hover:text-black transition-all duration-500">620+ Exclusive</h1>   
                  <h3 className="text-lg mt-2 group-hover:text-black transition-all duration-500">Happy Customer</h3>
                  <div className="flex mt-2">
                    <img src={images.happyone} alt="" className="rounded-full -ml-2" />
                    <img src={images.happytwo} alt="" className="rounded-full -ml-2" />
                    <img src={images.happytree} alt="" className="rounded-full -ml-2" />
                    
                      <FaPlus className='text-4xl -ml-4 mt-1 bg-black rounded-full p-2 '/>
                    
                    
                  </div>



                     
              </div>
     </div> 
     <div className="mt-20 max-sm:mt-1">
      <div className="mb-5"><Title text="our ingredients"/></div>
      <h1 className="text-3xl max-sm:text-2xl">CRAFTING DISHES WITH FRESHEST FLAVORS <span className="text-first">FRESHEST FLAVORS</span></h1>
      <p className="text-lg mt-4">We take pride in using only the freshest, hand-picked ingredients that are free from preservatives and artificial additives. Taste the difference with every bite as we serve dishes made from nature’s finest.</p>

      <div className="flex gap-6 justify-between max-sm:px-[1%] px-[7%] mt-10">
        <div className="">
          <FaMedal className='text-first text-4xl max-sm:text-2xl mx-auto'/>
          <h1 className="text-xl mt-3 max-sm:text-sm">Best Qualities</h1>
        </div>
        <div className=" ">
          <TbRosetteDiscountCheckFilled className='text-first text-4xl max-sm:text-2xl mx-auto'/>
          <h1 className="text-xl mt-3 max-sm:text-sm">Discount System</h1>
        </div>
        <div className="">
          <TbTruckDelivery className='text-first text-4xl max-sm:text-2xl mx-auto'/>
          <h1 className="text-xl mt-3 max-sm:text-sm">First Delivery</h1>
        </div>
      </div>
      <div className="mt-10"><a href="#contact" className="mt-4"><Button text="Book A Tabel"/></a> </div>
     
     </div>
    </div>
    <div className=" grid max-sm:grid-cols-2 grid-cols-4 border-t border-first py-10 gap-5 max-sm:px-[0%] max-sm:gap-3 px-[5%]">
      <div className="flex gap-3">
        <div className="border border-first max-sm:max-w-max max-sm: max-w-max p-3 rounded-full"><img src={images.chef} alt="" className="w-[50px] max-sm:w-[35px] max-sm:max-w-max max-sm:py-3 mx-auto"  /></div>
        <div className="">
          <h1 className="text-3xl mb-2 max-sm:text-lg font-bold">309</h1>
          <p className="max-sm:text-sm">Professional Chefs</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="border border-first max-sm:max-w-max max-sm: max-w-max p-3 rounded-full"><img src={images.food} alt="" className="w-[50px] max-sm:w-[35px] max-sm:max-w-max max-sm:py-3 mx-auto"  /></div>
        <div className="">
          <h1 className="text-3xl mb-2 max-sm:text-lg font-bold">453</h1>
          <p className="max-sm:text-sm">Items Of Food</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="border border-first max-sm:max-w-max max-sm: max-w-max p-3 rounded-full"><img src={images.medal} alt="" className="w-[50px] max-sm:w-[35px] max-sm:max-w-max max-sm:py-3 mx-auto"  /></div>
        <div className="">
          <h1 className="text-3xl mb-2 max-sm:text-lg font-bold">25 +</h1>
          <p className="max-sm:text-sm">Years Of Experience</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="border border-first max-sm:max-w-max max-sm: max-w-max p-3 rounded-full"><img src={images.people} alt="" className="w-[50px] max-sm:w-[35px] max-sm:max-w-max max-sm:py-3 mx-auto"  /></div>
        <div className="">
          <h1 className="text-3xl mb-2 max-sm:text-lg font-bold">300 +</h1>
          <p className="max-sm:text-sm">Satisfied Clients</p>
        </div>
      </div>
    </div>
     
   </section>
  )
}

export default Ingregients
