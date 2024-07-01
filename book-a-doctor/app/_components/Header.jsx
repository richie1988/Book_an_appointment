"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LoginLink, LogoutLink} from '@kinde-oss/kinde-auth-nextjs'
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



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
    const {
        permissions,
        isLoading,
        user,
        accessToken,
        organization,
        userOrganizations,
        getPermission,
        getBooleanFlag,
        getIntegerFlag,
        getFlag,
        getStringFlag,
        getClaim,
        getAccessToken,
        getToken,
        getIdToken,
        getOrganization,
        getPermissions,
        getUserOrganizations
      } = useKindeBrowserClient();
        

    useEffect(()=>{
console.log(user)
    },[user])
  return (
    <header className='sticky top-0 bg-white z-50 shadow-md'>
    <div className='flex justify-between p-4 shadow-sm'>
    <div className='flex items-center gap-10'>
   <Image src="/logo-3.png" alt="logo" width={120} height={50} priority/>
   <ul className='md:flex gap-8 hidden'>
    {Menu.map((item,index)=> (
        <Link href={item.path}>
       <li key={index} className='hover:text-primary 
       cursor-pointer hover:scale-125 transition-all ease-in-out'>{item.name}</li>
       </Link>
    ))}
   </ul>
    </div>
    {user ?
        <Popover>
  <PopoverTrigger>
  <Image src={user?.picture} alt="profile" width={50} height={50} className="rounded-full"/>
  </PopoverTrigger>
  <PopoverContent className="w-40">
  <ul className="flex-col gap-2">
  <li className="cursor-pointer hover:bg-slate-500 p-2 rounded-md">Profile</li>
  <Link href={'/my-booking'} className="cursor-pointer hover:bg-slate-500 p-2 rounded-md">My bookings</Link>
  <li className="cursor-pointer hover:bg-slate-500 p-2 rounded-md"><LogoutLink >Logout</LogoutLink> </li>

  </ul>
  </PopoverContent>
</Popover>
    : <LoginLink><Button> Get Started</Button></LoginLink>
}
    
    </div>
    </header>
  )
}

export default Header
