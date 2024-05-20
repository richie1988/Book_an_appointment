import React from 'react'
import Image from 'next/image';

function DoctorList({doctorList}){
    return (
        <div className='md-10 px-8'>
            <h2 className='font-bold text-xl'>Popular Doctors</h2>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-7'>
            {doctorList && doctorList.map((doctor, index) => (
    <div key={index} className='border-[1px] rounded-lg p-4'>
        {doctor.attributes?.Image?.data?.[0]?.attributes?.url ? (
            <Image 
                src={doctor.attributes.Image.data[0].attributes.url} 
                alt="doctor" 
                width={500} 
                height={200}
                className="h-[200px] w-full obj-cover rounded" 
            />
            
        ) : (
            <p>Image not available</p>
        )}
          <div className='mt-3 items-baseline flex flex-col'>
            <h2 className='text-[15px] bg-blue-100 p-1 rounded-full
            px-2 text-primary'>
                {doctor.attributes?.category?.data?.attributes?.Name ? (
                    doctor.attributes.category.data.attributes.Name
                ) : (
                    "Category not available"
                )}
            </h2>
            <h2>{doctor.attributes.Name}</h2>
        </div>
    </div>
))}
</div>
</div>
    )}

export default DoctorList