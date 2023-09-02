import Link from 'next/link';
import React from 'react';

const CheckOutSection = () => {
    return (
        <div className='text-center md:py-20 pb-20 text-white md:min-h-[600px] md:px-0 px-4'>
            <h1 className='md:text-5xl text-4xl md:py-4 md:w-[700px] mx-auto'>Check out more works by Geeks Invention</h1>
            <p className='py-12 text-lg text-[#CFCFD0]'>
                Our case studies describe design and development solutions implemented at
                our <br />Geeks Invention projects. The stories are a valuable resource for those
                looking to <br />develop their own mobile apps.
            </p>
            <Link href="" className="text-left mx-auto w-[280px] border border-1 px-6 py-[16px] study-button border-[#ff5300] hover:text-white text-[#ff5300] hover:bg-[#ff5300] text-xl rounded-full duration-300">
                See all case full studies
            </Link>
        </div>
    );
};

export default CheckOutSection;