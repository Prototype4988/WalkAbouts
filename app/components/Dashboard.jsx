"use client"
import React from 'react'
import { signOut } from "next-auth/react";
//import { Button } from '../../@/components/ui/button';
//import { Card } from '../../@/components/ui/card';
import { cn } from '../../@/lib/utils';
import Navdashboard from './Navdashboard';
import Sidebar from './Sidebar';
import { ArrowRight, UserRound, Map, Tent,Newspaper } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

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
    {
        label: "NewsLetter",
        icon: Newspaper,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/newsletter",
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

                    {/* <div className='px-4 md:px-20 lg:px-32 space-y-4'>
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
                </div> */}
                {/* <Navdashboard/>
                <h1>Dashboard</h1>
                <h1>{session.user.name}</h1>
                <Button>Click here</Button>
                <button onClick={()=>{signOut();}} >Sign Out</button> */}
                <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8 justify-center pb-2">
                <Card shadow="sm" className="col-span-12 sm:col-span-4 h-[275px]" onPress={()=>router.push("/profile")} isPressable isHoverable>
                    <CardBody className="overflow-visible p-0">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Configure Profile</p>
                            <h3 className="text-white font-medium text-large flex text-left">Configure your profile to get custom voice agent</h3>
                        </CardHeader>
                        <Image 
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-auto h-full object-cover"
                            src="assets/Voice_bot.jpg"
                        />
                    </CardBody>
                </Card>
                        <Card shadow="sm" className="col-span-12 sm:col-span-4 h-[275px]" onPress={()=>router.push("/travelguide")} isPressable isHoverable>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-tiny text-white/60 uppercase font-bold">Travel Guide</h4>
                                <h4 className="text-white font-medium text-large text-left">Create a personalised travel guide for your Trip</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="assets/Travel_guide.jpg"
                            />
                    
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[275px]" isFooterBlurred>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Tour Guide</p>
                        <h4 className="text-white/90 font-medium text-large">Generate a tour to plan your vacation</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="assets/tour.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon (Under Development)</p>
                        </div>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[275px] col-span-12 sm:col-span-2 align-middle " style={{visibility:"hidden"}}>
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">NewsLetter</p>
                        <h4 className="text-white font-medium text-large">Generate NewsLetter based on your current location</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://nextui.org/images/card-example-6.jpeg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[275px] col-span-12 sm:col-span-7 align-middle">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">NewsLetter</p>
                        <h4 className="text-white font-medium text-large">Generate NewsLetter based on your current location</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="assets/newsletter.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon (Under Development)</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            </div>
            </main>
        </div>
        
  )
}

export default Dashboard
