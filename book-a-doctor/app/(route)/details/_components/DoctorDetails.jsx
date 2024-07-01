import React from 'react'
import Image from 'next/image'
import { GraduationCap } from 'lucide-react'
import BookAppointment from './BookAppointment'

function DoctorDetails({doctor}){
    const socialMediaList=[
        {
            id:1,
            icon:'/icon8-linkedin-48.png',
            url: 'https://www.linkedin.com/'
        },
        {
            id:2,
            icon:'/icon8-facebook-48.png',
            url: 'https://www.facebook.com/'
        },
        {
            id:3,
            icon:'/icon8-twitter-48.png',
            url: 'https://twitter.com/'
        },
        {
            id:4,
            icon:'/icon8-instagram-48.png',
            url:'https://www.instagram.com/'
        }
    ]
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
            <h1>Doctor Details</h1>
            {/*doctor image*/}
            <div>
            <Image 
                src={doctor.attributes.Image.data[0].attributes.url} 
                alt="doctor" 
                width={500} 
                height={200}
                className="h-[200px] w-full obj-cover rounded" 
            />
            </div>
            {/*doctor info*/}
            <div className="col-span-2 m-5 md:px-10 flex flex-col gap-3 items-baseline">
                <h2 className="font-bold text-2xl">{doctor.attributes.Name}</h2>

                <h2 className="flex gap-2 text-grey-500 text-md">
                    <GraduationCap/>
                    <span className="ml-2">{doctor.attributes.Year_of_Experience} of Experience</span>
                </h2>
                <h2 className='text-md flex gap-2 text-grey-500'>
                    <MapPin/>
                    <span className="ml-2">{doctor.attributes.Address}</span>
                </h2>
                <h2 className='text-[15px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                  {doctor.attributes?.categories?.data?.attributes?.Name ? (
                    doctor.attributes.categories.data.attributes.Name
                  ) : (
                    "Category not available"
                  )}
                </h2>
                <div className='flex gap-3'>
                    {socialMediaList.map((item,index)=>{
                        <Image src={item.icon} key={index}
                        alt="icon" width={30} height={30}
                         />
                    })}
                </div>
                <BookAppointment doctor={doctor}/>
            </div>
        </div>
          {/* About doctor*/}
          <div className='p-3 border-[1px] rounded-lg mt-5'>
                <h2 className='font-bold text-[20px]'>About Me</h2>
                <p className='text-gray-500 tracking-wider mt-2'>{doctor.attributes.About}</p>
            </div>
        </>
    )
}

export default DoctorDetails
