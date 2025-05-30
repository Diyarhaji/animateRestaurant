import React from 'react'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
import MultiFilters from '../compent/MultiFilters'
const Main = () => {
  return (
    <section id='menu' className="mt-20">
      <div className="ml-[550px] max-sm:ml-[100px] ">
         <Title text="from our menu" className=""/>
      
      </div>
      <h1 className="text-center max-sm:text-2xl mt-4 text-4xl max-w-2xl mx-auto"> AN INSPIRED MENU THAT BLENDS TRADITION <span className="text-first"> BLENDS TRADITION</span></h1>
        

         <MultiFilters/>
    </section>
  )
}

export default Main
