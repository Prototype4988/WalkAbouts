"use client"
import Link from 'next/link'
import {React, useState} from 'react'
import { BsPerson } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false);

  const handleNav =() =>
    {
        setNav(!nav)
        setLogo(!logo)
    }
  return (

    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 className='font-bold text -3xl p-3'>Walkabouts</h1>
        </div>
        <div>
            <ul className='hidden md:flex justify-center items-center gap-10'>
                
                <Link href="/">
                    <li className='hover:text-blue-400 hover:underline duration-200'>
                        Home
                    </li>
                </Link>
                <Link href="/">
                    <li className='hover:text-blue-400 hover:underline duration-200'>
                        Virtual Guide
                    </li>
                </Link>
                <Link href="/">
                    <li className='hover:text-blue-400 hover:underline duration-200'>
                        Tour Guide
                    </li>
                </Link>
                <Link href="/">
                    <li className='hover:text-blue-400 hover:underline duration-200'>
                    Newsletters
                    </li>
                </Link>
            </ul>
        </div>
        <div className='hidden md:flex gap-10'>
            <BsPerson className='hover:text-blue-400 duration-200 cursor-pointer' size={20}/>
        </div>

        <div onClick={handleNav} className='md:hidden'>
            {nav? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>}
        </div>
        
        <div
            onClick={handleNav} 
            className={
            nav
                ?'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' 
                : 'absolute left-[-100%]'
            }
        >
            <ul>
                <h1 className='text-2xl font-bold mb-5'>
                    Walkabouts
                </h1>
                <Link href="/">
                    <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                        Home
                    </li>
                </Link>
                <Link href="/">
                    <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                        Virtual Guide
                    </li>
                </Link>
                <Link href="/">
                    <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                        Tour Guide
                    </li>
                </Link>
            </ul>
            <div className='flex flex-col justify-center items-center gap-5'>
            <BsPerson className='hover:text-blue-400 duration-200 cursor-pointer text-black' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar