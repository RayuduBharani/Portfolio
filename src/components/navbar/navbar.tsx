import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from '../ui/button'
import { ModeToggle } from '../mode'
import MobileNav from './sheet'
import { items } from '@/lib/utils'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='w-full h-[4.5rem] bg-background flex items-center justify-between max-sm:px-2 sm:px-8 fixed z-50'>
            <div className='w-[30%] h-full flex items-center justify-start'>
                <p className='hidden sm:block font-bold text-xl text-primary'><Link href={"#home"}>Bharani <span className='hidden md:inline'>Rayudu</span></Link></p>
                <Link href={"#home"}><img src="RB_1.png" className='w-9 h-9 max-sm:inline hidden' alt="" /></Link>
            </div>
            <div className='w-[70%] h-full justify-end hidden md:flex'>
                <NavigationMenu>
                    <NavigationMenuList className='space-x-5'>
                        <NavigationMenuItem className='flex items-center justify-center gap-5'>
                            {items.map((item, id) => (
                                <NavigationMenuLink 
                                    className='rounded-lg relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300' 
                                    key={id} 
                                    href={item.href}
                                >
                                    {item.title}
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuItem>
                        <ModeToggle />
                        <Button><Link href={"https://drive.google.com/file/d/1c0U2zv47XoyFRlyxucCWH4kaW85_gCSQ/view?usp=sharing"} target='_blank'>Resume</Link></Button>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <MobileNav />
        </div>
    )
}