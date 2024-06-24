import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'

function Details(params) {
  const getDoctorById=()=>{
    GlobalApi.getDoctorById(params.recordid).then(resp=>{
      console.log(resp.data)
    
    })
  }
  return (
    <div>
      Details
    </div>
  )
}

export default Details
