import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-[#16181C]'>
            <div className='text-white flex md:flex-row flex-col md:gap-0 gap-3 md:text-left text-center justify-around items-center py-2'>
                <div>
                    <h1 className='text-3xl font-semibold'>Geeks <span className='text-[#FF7903]'>Invention</span></h1>
                    <p className='text-[#CFCFD0] text-sm'>447 Broadway, 2nd Floor Suite #772,</p>
                    <p className='text-[#CFCFD0] text-sm'>New York 10013, United States</p>
                    <p className='text-[#CFCFD0] text-sm'>+1-347-535-0004</p>
                </div>
                <ul className='md:flex grid grid-cols-2 gap-4 text-sm'>
                    <li className='cursor-pointer'><a className='underline' href="">Works</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Technologies</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Services</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Company</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Contacts</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Terms and Conditions</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">Privacy Policy</a></li>
                </ul>
                <Link href="" className="border border-1 px-8 py-[14px] text-sm hover:text-black text-white hover:bg-white rounded-full duration-300 text-left">
                    Stay tuned for our updates
                </Link>
            </div>
            <p className='text-[#434447] text-center text-xs py-3 md:block hidden'>© Copyright 2023 - Mobile App Design and Development Company. All Rights Reserved</p>
            <p className='text-[#434447] text-center text-xs py-3 block md:hidden'>© Copyright 2023 . All Rights Reserved</p>
        </div >
    );
};

export default Footer;