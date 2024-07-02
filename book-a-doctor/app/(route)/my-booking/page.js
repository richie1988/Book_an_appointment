"use client"
import React,{useEffect, useState} from 'react'
import BookingList from './_components/BookingList'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'



function MyBooking(){

    const [bookingList, setBookingList]=useState([]);
    const {user}=useKindeBrowserClient();
    useEffect(()=>{
        user&&getUserBookingList();
    },[user])
    const getUserBookingList=()=>{
        GlobalApi.getUserBookingList(user?.email).then(resp=>{
            //console.log(resp.data);
            setBookingList(resp.data)

        })
    }
//used to filter the user bookings
    const filterBookingList=(status)=>{
        const result = bookingList.filter(item=>
          status=="upcoming"?  new Date(item.attributes.Date)>= new Date()
          :new Date(item.attributes.Date)<= new Date()
        )
        //console.log(result)
        return result
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
            <BookingList bookingList={filterBookingList("upcoming")}
            updateRecord={()=>getUserBookingList()}
             expired={false}/>
        </TabsContent>
        <TabsContent value="expired">
        <BookingList bookingList={filterBookingList("expired")} 
        updateRecord={()=>getUserBookingList()}
        expired={true}/>
        </TabsContent>
        </Tabs>

            </div>
    )

}

export default MyBooking