"use client"
import React, {useEffect, useState} from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import DoctorDetails from './_components/DoctorDetails'

function Details(params) {
  const [doctor, setDoctor]=useState();
  useEffect(()=>{
    getDoctorsById();
  },[])
  const getDoctorsById=()=>{
    GlobalApi.getDoctorsById(params.recordId).then(resp=>{
      //console.log(resp.data)
      setDoctor(resp.data.data);
    
    })
  }
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bolf text-[22px]">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">

        {/*doctors details*/}
        <div className='col-span-3'>
        {doctor && <DoctorDetails doctor={doctor} />}
          <div>
          </div>
        </div>

         {/*doctors Suggestion*/}
        <div>
        </div>

      </div>
    </div>
  )
}

export default Details
