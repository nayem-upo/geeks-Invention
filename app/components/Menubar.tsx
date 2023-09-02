import React from 'react';

const Menubar = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <ul className="p-4 w-full min-h-full bg-[#010101] text-base-content">
                    {/* Sidebar content here */}
                    
                    <ul className='flex gap-7 flex-col text-center mt-[30%]'>
                        <li className='cursor-pointer'><a className='underline' href="">HOME</a></li>
                        <li className='cursor-pointer'><a className='underline' href="">WORKS</a></li>
                        <li className='cursor-pointer'><a className='underline' href="">TECHNOLOGIES</a></li>
                        <li className='cursor-pointer'><a className='underline' href="">SERVICES</a></li>
                        <li className='cursor-pointer'><a className='underline' href="">COMPANY</a></li>
                        <li className='cursor-pointer'><a className='underline' href="">CONTACTS</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;