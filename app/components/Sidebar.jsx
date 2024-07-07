"use client";

import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { cn } from '../../@/lib/utils';
import { LayoutDashboard, LogOut, Map, Tent,Newspaper, UserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { signOut } from "next-auth/react";


const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes =[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
        color: "text-sky-500",
    },
    {
        label: "Profile",
        icon: UserRound,
        href: "/profile",
        color: "text-violet-700",
        
    },
    {
        label: "Travel Guide",
        icon: Map,
        href: "/travelguide",
        color: "text-pink-700",
        
    },
    {
        label: "Tour Guide",
        icon: Tent,
        href: "/tourguide",
        color: "text-orange-700",
        
    },
    {
        label: "NewsLetter",
        icon: Newspaper,
        href: "/newsletter",
        color: "text-green-700",
        
    },
    
];

const Sidebar = ({session}) => {
    const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
        <div className='px-3 py-2 flex-1'>
            <Link href='/' className='flex items-center pl-3 mb-14'>
                {/* <div className='relative w-8 h-8 mr-4'>
                    
                </div> */}
                <h1 className={cn('text-2xl font-bold',montserrat.className)}>
                    Walkabouts
                </h1>
            </Link>
            <div className='space-y-1'>
                {routes.map((route) => (
                    <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname===route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                        <div className='flex items-center flex-1'>
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                    
                ))}
                <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                        <div className='flex items-center flex-1 text-zinc-400' onClick={()=>{signOut();}}>
                            <LogOut className="h-5 w-5 mr-3 text-white-700"/>
                            Sign Out
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar