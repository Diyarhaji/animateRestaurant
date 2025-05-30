import React from 'react'
import { RxComponent1 } from "react-icons/rx";

const Title = ({text}) => {
  return (
    <div>
      <p className="flex uppercase gap-2 max-sm:text-lg  text-xl font-bold font-serif items-center text-first"><RxComponent1 className='animate-pulse'/>  {text}</p>
    </div>
  )
}

export default Title
