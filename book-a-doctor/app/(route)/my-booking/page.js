"use client"
import React from 'react'
import BookingList from './BookingList'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function MyBooking(){


    const getUserBookingList=()=>{
        GlobalApi.getUserBookingList().then(resp=>{
            
        })
    }
    return (
        <div className='px-4 sm:px-10 mt-10'>
           <h2 className='font-bold text-2xl'>My Booking</h2>

           <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList className="w-full justify-start">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
            <BookingList />
        </TabsContent>
        <TabsContent value="expired">
        <BookingList />
        </TabsContent>
        </Tabs>

            </div>
    )

}

export default MyBooking