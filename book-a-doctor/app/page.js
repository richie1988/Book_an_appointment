"use client"
// import { Button } from "@/components/ui/button"
import HeroSection from "./_components/HeroSection";
import CategorySection from "./_components/CategorySection";
import DoctorList from "./_components/DoctorList";
import GlobalApi from './_utils/GlobalApi'
import { useEffect, useState } from "react";

export default function Home() {
  const[doctorList,setDoctorList]=useState([]);

  useEffect(()=>{
    getDoctorList()

  },[])

  const getDoctorList=()=> {
    GlobalApi.getDoctors().then(resp=> {
      console.log(resp.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div>
      {/*Hero section goes here */}
      <HeroSection/>
      {/*Category section + search bar */}
      <CategorySection/>

      {/*Popular Doctor List */}
      <DoctorList doctorList={doctorList}/>
    </div>
  );
}
