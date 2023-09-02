import Link from 'next/link';
import React from 'react';

const IndustrialSection = () => {
    return (
        <div className='text-white flex md:pt-32 md:flex-row flex-col py-10 justify-center gap-16 items-center min-h-[700px]'>
            <img className='w-[600px] md:p-0 p-5' src="https://geeksinvention.com/assets/v3/industry-iot.webp" alt="" />
            <div className='md:w-[450px] md:px-0 px-4' data-aos="fade-up" data-aos-duration="1000">
                <h1 className='md:text-6xl text-5xl font-semibold'>Industrial IoT</h1>
                <p className='text-[#97E0DD] md:text-3xl text-2xl py-5'>Providing a better connected experience</p>
                <ul className='flex flex-wrap gap-4 text-sm text-center font-thin py-1'>
                    <li className='bg-[#1DBDB5] py-1 p-3 rounded-full'>Connected manufacturing</li>
                    <li className='bg-[#1DBDB5] py-1 p-3 rounded-full'>Aviation</li>
                    <li className='bg-[#1DBDB5] py-1 p-3 rounded-full'>Smart Building</li>
                </ul>
                <p className='text-lg py-6'>
                    Revolutionize your industry with our innovative IoT solutions. Our software
                    development services offer connected manufacturing, pollution control, smart
                    transportation, and intelligent farming, agriculture, and forestry. With our
                    expertise, you can harness the power of technology to increase efficiency,
                    reduce waste, and optimize operations for a sustainable future.
                </p>
                <Link href="" className="w-[240px] mx-auto md:mx-0 mt-3 border border-1 px-6 py-[16px] study-button hover:text-black text-white hover:bg-white text-xl rounded-full duration-300">See case full study</Link>
            </div>
        </div>
    );
};

export default IndustrialSection;