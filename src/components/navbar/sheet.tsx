import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { items } from '@/lib/utils'
import Link from 'next/link'
import { ModeToggle } from '../mode'


export default function MobileNav() {
    return (
        <div className='flex gap-3'>
            <div className='md:hidden items-center justify-center'>
                <ModeToggle />
            </div>
            <Drawer>
                <DrawerTrigger asChild >
                    <Button variant={"outline"} size={"icon"} className="md:hidden cursor-pointer">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className='flex flex-col items-center'>
                    <DrawerHeader>
                        <DrawerTitle></DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <NavigationMenu>
                        <NavigationMenuList className='space-x-5'>
                            <NavigationMenuItem className='flex flex-col items-center justify-center gap-3'>
                                {items.map((item, id) => (
                                    <NavigationMenuLink
                                        className='rounded-lg relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300'
                                        key={id}
                                        href={item.href}
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                ))}
                                <Button asChild className='mb-5'>
                                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
