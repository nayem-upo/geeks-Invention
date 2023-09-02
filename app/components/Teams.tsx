import Link from 'next/link';
import React from 'react';

const Teams = () => {
    return (
        <div className='text-white text-center md:py-20 py-10  md:px-0 px-4' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='md:text-7xl text-5xl py-2'>Only dedicated teams</h1>
            <p className='py-8 text-lg text-[#CFCFD0]'>Our team is 100% concentrated on your project and you
                have full control <br />over management of the dedicated team members.</p>

            <div className='grid md:grid-cols-3 gap-y-20 items-center text-xl font-semibold my-10'>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg" alt="" />
                    <h1>Agile approach</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg" alt="" />
                    <h1>Deep tech expertise</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg" alt="" />
                    <h1>Personal commitment</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg" alt="" />
                    <h1>Regular reporting</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg" alt="" />
                    <h1>Time tracking</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='mx-auto' src="https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg" alt="" />
                    <h1>Scalability</h1>
                </div>
            </div>
            <Link href="" className="text-left my-20 mx-auto w-[222px] border border-1 px-6 py-[16px] study-button border-[#ff5300] hover:text-white text-[#ff5300] hover:bg-[#ff5300] text-xl rounded-full duration-300">
                See our services
            </Link>
        </div>
    );
};

export default Teams;