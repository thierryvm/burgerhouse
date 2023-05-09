import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  return (
    <div className='p-10'>
        <h1 className='flex items-center gap-2 justify-center '><BeakerIcon className="h-10 w-10 inline" /><span  className='text-3xl text-green-500 '>world from HomePage !</span> 
        </h1>
    </div>
  )
}
