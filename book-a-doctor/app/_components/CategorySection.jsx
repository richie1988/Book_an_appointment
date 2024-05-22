"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image';

function CategorySection() {
const[categoryList, setCategoryList]= useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])
  const getCategoryList =()=> {
    GlobalApi.getCategory().then(resp=> {
      console.log(resp.data)
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='mb-10 flex flex-col px-5 gap-4 items-center'>
      <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
      <h2 className='text-grey-500 text-xl'>Search Your Doctors and Book an Appointment</h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit"> <Search className='h-4 w-4 mr-2'/>Search</Button>
    </div>
    {/*Display List of categories*/}
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
    {categoryList.length>0?categoryList.map((item, index) => index <6 && (
    <div key={index} className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 cursor-pointer hover:scale-105 transition-all easy-in-out'>
        <Image src={item.attributes?.Icon?.data.attributes?.url} alt="icon" width={40} height={40}/>
        <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
    </div>
)): [1,2,3,4,5,6].map((item,index)=>(
<div className='h-[130px] w-[120px] bg-slate-200 m-2 rounded-lg animate-pulse gap-2'>
    Categories Loading
    </div>
))}
</div>
    </div>
  )
}

export default CategorySection
