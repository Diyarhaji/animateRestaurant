import React from 'react'
import Button from '../compent/Button'
import Button2 from '../compent/Button2'
import Title from '../compent/Title';
const Contact = () => {
  return (
    <section id='contact' className="grid max-sm:grid-cols-1 max-sm:mt-1 grid-cols-2 gap-5 mt-20 py-20 px-[3%]">
      <div className="">
         <Title text="reserve a table!"/>
          <h1 className="text-3xl max-w-xl mt-4">RESERVE NOW YOUR TABLE AND ENJOY <span className="text-first">DINING EXPERIENCE.</span> </h1>
          <div className="mt-4">
            <h2 className="text-xl max-sm:mb-4">Open Hours</h2>
            <p className="text-lg mt-2">Mon - Thu  <span className="text-first ml-10">10:00 AM - 09.00 PM</span></p>
            <p className="text-lg mt-2">Fri - Sat  <span className="text-first ml-14">09:00 AM - 10:00 PM</span></p>
            <p className="text-lg mt-2">Sun <span className="text-first ml-20">Closed</span></p>
          </div>
      </div>
       <form action="" className="mx-auto bg-white max-sm:p-3 max-sm:mt-10 py-10 px-10 rounded-xl max-sm:w-[350px] w-[550px]">
        <div className="flex flex-col">
          <label htmlFor="name" className='text-first text-lg  '>Your Name</label>
          <input type="name" placeholder='e.g.John' className='mt-1 p-2 rounded-lg  border border-first text-black'/>
        </div>
        <div className="mt-5 flex gap-3 max-sm:flex-col">
          <div className="flex flex-col">
            <label htmlFor="mail" className='text-first text-lg '>Email Address</label>
            <input type="mail" className='mt-1 p-2 rounded-lg  border border-first text-black' placeholder='e.g John@example.com' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className='text-first text-lg  '>Phone Number</label>
            <input type="text" placeholder='e.g 07501234567' className='mt-1 p-2 rounded-lg  border border-first text-black' />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-3 gap-3 max-sm:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="date" className='text-first text-lg  '>Date</label>
            <input type="date" className='mt-1 p-2 rounded-lg  border border-first text-black'/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className='text-first text-lg'> Time</label>
            <select name="Select time" id="" className='mt-1 p-3 border border-first rounded-lg text-black'>
              <option value="">10:00 - 11:00</option>
              <option value="">11:00 - 12:00</option>
              <option value="">12:00 - 01:00</option>
              <option value="">01:00 - 02:00</option>
              <option value="">02:00 - 03:00</option>
              <option value="">03:00 - 04:00</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="person" className='text-first text-lg'>Number of Person</label>
            <input type="number"  className='mt-1 p-2 rounded-lg  border border-first text-black'/>
          </div>
        </div>
        <div className="mt-10 max-w-max mx-auto">
          <Button className="b" text="Reserve Now"/>
        </div>
       </form>
    </section>
  )
}

export default Contact
