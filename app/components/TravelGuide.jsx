"use client"
import React from 'react'
import Sidebar from './Sidebar';
import { useRouter } from 'next/navigation';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const travelguide = ({session}) => {
    const router= useRouter();
  return (
    
    
        <div className='h-full relative'>
            <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
                <div>
                    <Sidebar session={session}/>
                </div>
            </div>
            <main className='md:pl-72'>
                <div>
                </div>            
            </main>
        </div>
        
  )
}

export default travelguide
