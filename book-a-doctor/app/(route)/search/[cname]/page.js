"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorList from '@/app/_components/DoctorList';
import { usePathname } from 'next/navigation';

function Search() {
  const [doctorsList, setDoctorsList] = useState([]);
  const params = usePathname();
  const category = params.split('/')[2];

  useEffect(() => {
    getDoctorsByCategory(category); // Fetch doctors based on the selected category
  }, [category]);

  const getDoctorsByCategory = (category) => {
    GlobalApi.getDoctorsByCategory(category).then(resp => {
      setDoctorsList(resp.data.data);
    }).catch(err => {
      console.error("Failed to fetch doctors:", err);
    });
  };

  return (
    <div>
      <DoctorList heading={category} doctorList={doctorsList} />
    </div>
  );
}

export default Search;
