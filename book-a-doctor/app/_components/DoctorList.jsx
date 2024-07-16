import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function DoctorList({ doctorList, heading = 'Popular Doctors' }) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>{heading}</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-4 lg:grid-cols-4'>
        {doctorList && doctorList.length > 0 ? (
          doctorList.map((doctor, index) => (
            <div
              className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'
              key={index}
            >
              {doctor.attributes?.Image?.data?.[0]?.attributes?.url ? (
                <Image
                  src={doctor.attributes.Image.data[0].attributes.url}
                  alt="Doctor"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded"
                />
              ) : (
                <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center rounded">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}
              <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                  {doctor.attributes?.categories?.data?.[0]?.attributes?.Name || 'Category not available'}
                </h2>
                <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
                <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_Experience}</h2>
                <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
                <Link href={`/details/${doctor.id}`} passHref>
                  <h2 className='flex items-center justify-center p-2 px-3 border-[1px] border-primary text-primary rounded-full w-[120px] text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>
                    Book Now
                  </h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          // Skeleton Effect or Loading State
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>
              Server its down come back later
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorList;
