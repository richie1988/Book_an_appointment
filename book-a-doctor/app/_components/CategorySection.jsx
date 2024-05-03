import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function CategorySection() {
  return (
    <div className='mb-10 flex flex-col gap-4 items-center'>
      <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
      <h2 className='text-grey-500 text-xl'>Search Your Doctors and Book an Appointment</h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit"> <Search className='h-4 w-4 mr-2'/>Search</Button>
    </div>
    </div>
  )
}

export default CategorySection
