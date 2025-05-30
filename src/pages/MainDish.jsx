import React from 'react'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
import images from '../assets/images'


const MainDish = () => { 
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
    <section id='dish' className="bg-bgtwo max-sm:h-auto max-sm:py-20 h-screen mx-auto ">
      <div className="text-center max-sm:py-1 max-sm:mt-1  py-20 mt-10 ">
        <div className="ml-[550px] max-sm:ml-[100px]"> <Title text="Our Main Dishes" className=""/></div>
        <h1 className="mt-3 max-sm:text-2xl mb-5 text-3xl mx-auto max-w-xl">SATISFY YOUR CRAVINGS WITH OUR SIGNATURE MAINS  <span className="text-first">SIGNATURE MAINS</span></h1>

      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-4 px-[5%]">
        <div className="mx-auto">
          <div className="w-[200px] h-[200px] mx-auto overflow-hidden group   rounded-full  z-10 bg-white ">
               <div className={hoverEffectClass} > 
               <img src={images.mainone} alt="" className="w-full h-full rounded-full" />
               </div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-2xl tracking-widest">Soups</h1>
            <p className="text-lg mt-4 max-w-lg">Warm, comforting, and full of flavor, our soups avre the perfect start to any meal.</p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="w-[200px] h-[200px] mx-auto overflow-hidden group   rounded-full  z-10 bg-white ">
               <div className={hoverEffectClass} > 
               <img src={images.maintwo} alt="" className="w-full h-full rounded-full" />
               </div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-2xl   tracking-widest">Salads</h1>
            <p className="text-lg mt-4 max-w-lg">Refreshing, vibrant, and full of fresh flavors, our salads are crafted to senses.</p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="w-[200px] h-[200px] mx-auto overflow-hidden group   rounded-full  z-10 bg-white ">
               <div className={hoverEffectClass} > 
               <img src={images.mainthree} alt="" className="w-full h-full rounded-full" />
               </div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-2xl tracking-widest">Main Dishes</h1>
            <p className="text-lg mt-4 max-w-lg">Offering bold flavors and expertly crafted recipes that cater to every taste.</p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="w-[200px] h-[200px] mx-auto overflow-hidden group   rounded-full  z-10 bg-white ">
               <div className={hoverEffectClass} > 
               <img src={images.mainfour} alt="" className="w-full h-full rounded-full" />
               </div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-2xl  tracking-widest">Appetizers</h1>
            <p className="text-lg mt-4 max-w-lg">Our appetizers are the perfect way to begin your dining experience flavors.

</p>
          </div>
        </div>
              
      </div>
    </section>
  )
}

export default MainDish
