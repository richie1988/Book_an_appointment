"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorList from '@/app/_components/DoctorList';
import React, { useEffect, useState } from 'react';

function Search({ params }) {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    getDoctors();
  }, [params.cname]);

  const getDoctors = () => {
    GlobalApi.getDoctorsByCategory(params.cname).then(resp => {
      setDoctorsList(resp.data.data);
    }).catch(err => {
      console.error("Failed to fetch doctors:", err);
    });
  };

  return (
    <div>
      <DoctorList heading={params.cname} doctorList={doctorsList} />
    </div>
  );
}

export default Search;
