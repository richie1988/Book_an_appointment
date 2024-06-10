import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Header() {
    const Menu=[
        {
            id:1,
            name: "Home",
            path: "/"
        },
        {
            id:2,
            name: "Explore",
            path: "/Explore"
        },
        {
            id:3,
            name: " Contact Us",
            path: "/"
        }
    ]
  return (
    <div className='flex justify-between p-4 shadow-sm'>
    <div className='flex items-center gap-10'>
   <Image src="/logo.svg" alt="logo" width={180} height={80} priority/>
   <ul className='md:flex gap-8 hidden'>
    {Menu.map((item,index)=> (
        <Link href={item.path}>
       <li key={index} className='hover:text-primary 
       cursor-pointer hover:scale-125 transition-all ease-in-out'>{item.name}</li>
       </Link>
    ))}
   </ul>
    </div>
    <Button> Get Started</Button>
    </div>
  )
}

export default Header
