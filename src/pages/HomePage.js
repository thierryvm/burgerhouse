import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  return (
    <div>
        <h1 className='flex items-center gap-2 justify-center '><BeakerIcon className="h-10 w-10 inline" /><span>world from HomePage !</span> 
        </h1>
    </div>
  )
}
