import Link from 'next/link';
import React from 'react';

const SmartEducationSection = () => {
    return (
        <div className='text-white flex md:flex-row flex-col py-24 justify-center gap-16 items-center'>
            <img className='w-[570px] md:p-0 p-5' src="https://geeksinvention.com/assets/v3/industry-education.webp" alt="" />
            <div className='md:w-[460px] md:px-0 px-4' data-aos="fade-up" data-aos-duration="1000">
                <h1 className='md:text-6xl text-5xl font-semibold'>Smart Education</h1>
                <p className='text-[#A3A3A5] md:text-3xl text-xl py-5'>Elevate your Education Institution</p>
                <ul className='md:flex grid grid-cols-2 gap-4 text-sm text-center font-thin py-1'>
                    <li className='bg-[#303035] py-1 p-3 rounded-full'>Learning Management</li>
                    <li className='bg-[#303035] py-1 p-3 rounded-full'>Course offering</li>
                    <li className='bg-[#303035] py-1 p-3 rounded-full'>Professional Training</li>
                </ul>
                <p className='text-lg py-6'>
                    Elevate your education institution with our comprehensive software solutions.
                    Learning management, course offerings, professional training, certification,
                    and school management tools to streamline your operations and enhance your
                    students' learning experience. Trust us to provide the cutting-edge
                    technology and support you need to thrive in the ever-evolving education
                    industry.
                </p>
                <Link href="" className="w-[240px] mx-auto md:mx-0 mt-3 border border-1 px-6 py-[16px] study-button hover:text-black text-white hover:bg-white text-xl rounded-full duration-300">See case full study</Link>
            </div>
        </div>
    );
};

export default SmartEducationSection;