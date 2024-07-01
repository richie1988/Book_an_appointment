import React from 'react'
import Image from 'next/image'
import Calendar from 'heroicons/outline/calendar.svg'
import Clock from 'heroicons/outline/clock.svg'

function BookingList({bookingList, expired}) {
    return (
        <div>
            <h2>Booking List</h2>
                {bookingList&&bookingList.map((booking, index) => (
                    <div key={index} className='flex gap-4 item-center border p-3 m-3 rounded-lg'>
                         <Image 
                  src={ booking.attributes.doctor.data.attributes?.Image.data[0].attributes.url}
                  alt="doctor-image"
                  width={80} 
                  height={80}
                  className="h-[80px] w-[80px] obj-cover rounded" 
                />

                    <div className="flex flex-col gap-2 w-full">
                        <h2 className='font-bold text-[18px] items-center flex justify-between'>{booking.attributes.doctor.data.attributes.Name}
                            {expired&& <Button variant="outline" className='bg-primary text-white rounded-lg border-primary'>Cancel Appointment</Button>}
                        </h2>
                        <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary'/>{booking.attributes.doctor.data.attributes.Address}</h2>
                        <h2 className='flex gap-2 text-gray-500'><Calendar className='text-primary'/> Appointment on{moment(booking.attributes.Date).format('DD-MM-YYYY')}</h2>
                        <h2 className='flex gap-2 text-gray-500'><Clock className='text-primary'/> At Time:{booking.attributes.Time}</h2>
                        <h2>{booking.attributes.Status}</h2>
                    </div>
                    </div>
                ))}
            </div>

    )
}

export default BookingList