import Link from 'next/link';
import React from 'react';

const MessagesSection = () => {
    return (
        <div className='bg-[#16181C] text-white text-center md:py-20 md:pt-48 py-10 md:px-0 px-8'>
            <h1 className='md:text-6xl text-4xl'>Get to know us better!</h1>
            <p className='py-12 text-lg text-[#CFCFD0]'>It is a pleasure to have you on our website.
                Let us know if there's an opportunity to <br />do something together.</p>
            <Link href="" className="text-left text-white my-20 mx-auto w-[240px] px-10 py-[14px] hover:bg-white hover:text-[#ff5300] bg-[#ff5300] rounded-full duration-300">
                Drop us a message
            </Link>
        </div>
    );
};

export default MessagesSection;