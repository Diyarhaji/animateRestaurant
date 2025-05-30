import React from 'react'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
import images from '../assets/images'
import { FaStar } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";

const Offer = () => {
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
    <section id='offer' className="h-auto py-20 px-[3%] w-full grid max-sm:grid-cols-1 grid-cols-2 gap-20 bg-bgthree">
      <div className="relative overflow-hidden max-sm:order-2">
        <img src={images.offer} alt="" className="" /> 
          <div className="max-w-max animate-rightToLeft group overflow-hidden absolute max-sm:-bottom-1 max-sm:py-2 max-sm:px-3 bottom-10 right-1 py-5 px-7 rounded-lg bg-first before:content-[''] before:absolute before:inset-0 before:bg-white before:rounded-lg z-20 before:-z-10  before:text-black before:translate-y-[100%] hover:before:text-black before:transition-all before:duration-500 hover:before:translate-y-0">
              <h1 className="text-2xl group-hover:text-black transition-all duration-500">Delicious Burge</h1>   
                  <div className="text-[#FFD700] flex gap-1 mt-2">
                     <FaStar/>  
                     <FaStar/>  
                     <FaStar/>  
                     <FaStar/>  
                     <FaStar/>  
                  </div>   
                  <ul className="mt-3 group-hover:text-black transition-all duration-500">
                    <li className='flex gap-3 items-center text-lg'><MdTaskAlt/> Tomato Sauces</li>
                    <li className='flex gap-3 items-center text-lg'><MdTaskAlt/> Vegitables</li>
                    <li className='flex gap-3 items-center text-lg'><MdTaskAlt/> Lettuce</li>
                    <li className='flex gap-3 items-center text-lg'><MdTaskAlt/> Cheese slice</li>
                  </ul>
          </div>
      </div> 
      <div className="mt-20 max-sm:mt-10 max-sm:px-[3%] max-sm:order-1">
        <Title text="Our daily offers"/>
        <h1 className="text-4xl my-4 max-sm:text-3xl">TASTE THE SAVINGS WITH OUR  <span className="text-first">DAILY SPECIALS</span></h1>
        <p className="text-lg">Every day is an opportunity to enjoy your favorites at a discounted price. Explore our daily rotating specials and indulge in flavorful meals at a fraction of the cost.</p>
        
        <ul className="mt-4">
          <li className="flex items-center mt-2 gap-2 text-lg"><MdTaskAlt className='text-first'/> Seasonal & Locally Sourced Ingredients</li>
          <li className="flex items-center mt-2 gap-2 text-lg"><MdTaskAlt className='text-first'/> Vegetarian & Dietary-Friendly Options</li>
          <li className="flex items-center mt-2 gap-2 text-lg"><MdTaskAlt className='text-first'/> Exquisite Pairings & Unique Flavors</li>
        </ul>

        <div className=" mt-10 max-sm:gap-1 flex gap-5">
           <a href="#contact" className=""><Button text="Book A Tabel"/></a> 
          <a href="#menu" className=""><Button2 text="Explore Menu"/></a> 
          </div>
      </div>
    </section>
  )
}

export default Offer
