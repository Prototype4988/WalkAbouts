"use client"
import React from 'react'
import { signOut } from "next-auth/react";
import { Button } from '../../@/components/ui/button';
import { Card } from '../../@/components/ui/card';
import { cn } from '../../@/lib/utils';
import Navdashboard from './Navdashboard';
import Sidebar from './Sidebar';
import { ArrowRight, UserRound, Map, Tent, } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools=[
    {
        label: "User Settings",
        icon: UserRound,
        color: "text-violet-700",
        bgColor: "bg-violet-700/10",
        href: "/profile",
    },
    {
        label: "Travel Guide",
        icon: Map,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/travelguide",
    },
    {
        label: "Tour Guide",
        icon: Tent,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/tour",
    },
]
const Dashboard = ({session}) => {
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
                    <div className='mb-8 space-y-4'>
                        <h2 className='text-2xl md:text-4xl font-bold text-center p-5'>
                            Explore the power of AI
                        </h2>
                        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
                            Chat with the Gemini AI integrated travel companion
                        </p>
                    </div>
                    <div className='px-4 md:px-20 lg:px-32 space-y-4'>
                        {tools.map((tool) => (
                            <Card key={tool.href} onClick={()=>router.push(tool.href)} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer outline-2 border-gray-100 border-2">
                                <div className='flex items-center gap-x-4'>
                                    <div className={cn("p-2 w-fit rounded",tool.bgColor)}>
                                        <tool.icon className={cn("w-8 h-8", tool.color)}/>
                                    </div>
                                    <div className='font-semibold'>
                                        {tool.label}
                                    </div>
                                </div>
                                <ArrowRight className='w-5 h-5'/>
                            </Card>
                        ))

                        }
                    </div>
                </div>
                {/* <Navdashboard/>
                <h1>Dashboard</h1>
                <h1>{session.user.name}</h1>
                <Button>Click here</Button>
                <button onClick={()=>{signOut();}} >Sign Out</button> */}
            </main>
        </div>
        
  )
}

export default Dashboard
