import Link from 'next/link';
import React from 'react';

const SoftwareSection = () => {
    return (
        <div className='text-white text-center md:py-20 py-10'>
            <h1 className='md:text-7xl text-4xl py-2' data-aos="fade-up" data-aos-duration="1000">Software for modern platforms</h1>
            <p className='py-8 text-lg text-[#CFCFD0]'>We develop applications for mobile, web, wearables, and TV.</p>
            <div className='grid md:my-12 md:grid-cols-6 grid-cols-2 items-center text-xl font-semibold md:gap-0 gap-y-12'>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg" alt="" />
                    <h1>Web</h1>
                </div>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg" alt="" />
                    <h1>iOS</h1>
                </div>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg" alt="" />
                    <h1>Android</h1>
                </div>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg" alt="" />
                    <h1>Hybrid</h1>
                </div>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg" alt="" />
                    <h1>Wearables</h1>
                </div>
                <div className='flex flex-col gap-5' data-aos="zoom-in">
                    <img className='mx-auto' src="https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg" alt="" />
                    <h1>TV</h1>
                </div>
            </div>
            <Link href="" className="text-left my-20 mx-auto w-[240px] border border-1 px-6 py-[16px] study-button border-[#ff5300] hover:text-white text-[#ff5300] hover:bg-[#ff5300] text-xl rounded-full duration-300">
                See our tech stack
            </Link>
        </div>
    );
};

export default SoftwareSection;