"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorDetails from '../_components/DoctorDetails';

function Details({ params }) {
    const [doctor, setDoctor] = useState();

    useEffect(() => {
        const getDoctorById = async () => {
            try {
                const resp = await GlobalApi.getDoctorsById(params.recordId);
                setDoctor(resp.data.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        getDoctorById();
    }, [params.recordId]);

    return (
        <div>
            <h2 className='font-bold text-[30px] p-5 mt-2'>Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {/* Doctors details */}
                <div className='col-span-3'>
                    {doctor && <DoctorDetails doctor={doctor} />}
                </div>

                {/* Doctors Suggestions */}
                <div className='col-span-2'>
                    {/* Add content for doctor suggestions here */}
                </div>
            </div>
        </div>
    );
}

export default Details;




//NEXT_PUBLIC_STRAPI_API_KEY=b4f720fe3f745555f29724ac6b355680311111a7e8e0b59a3a006659d7dd8291be814df2f9a4ed0764c5ef7907521552b7d4460c21a254c198c7077a9915f43a828e17793252f0c5d174f207eb097a726fdec54d3a7cba1a256f7d0ba7c4797482da438afb86f15dc55b19f7790d0a371dac9ab35b431fb31ed5928153e83bb1