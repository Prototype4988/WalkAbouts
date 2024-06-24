import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../../@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../@/components/ui/sheet';
import Sidebar from './Sidebar';

const Navdashboard = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            setIsMounted(true);
        },[]);

        if (!isMounted){
            return null;
        }
    })
  return (
    <div className='flex items-center p-4'>
        <Sheet>
            <SheetTrigger>
            <Button variant = "ghost" size ="icon" className="md:hidden">
                <Menu/>
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Navdashboard