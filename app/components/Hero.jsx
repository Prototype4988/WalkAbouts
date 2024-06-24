'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Hero = () => {
    
  return (
    <div className='w-full h-screen relative'>
        <video
            className='w-full h-full object-cover'
            src='assets/travel.mp4'
            autoPlay
            loop
            muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className=' font-bold text-5xl py-2'>Walkabouts</h1>
            <h3 className='py-7 text-3xl'>
                Your Personalised Travel assistant.
                
            </h3>
            <div>
                    <Link href="./login">
                    <button className='mb-5 my-7 bg-blue-400 py-4 px-7 rounded-lg w-fit'>
                        Get Started
                    </button>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero