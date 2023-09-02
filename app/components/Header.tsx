"use client"
import React, { useState } from 'react';

interface HeaderProps {
    headerBackgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ headerBackgroundColor }) => {
    const [menuIcons, setMenuIcon] = useState(true)
    return (
        <div className={`${headerBackgroundColor} text-white flex items-center justify-between px-5 mx-auto p-4 fixed top-0 left-0 right-0 z-50 max-w-7xl`}>
            <h1 className='text-3xl font-semibold'>Geeks <span className='text-[#FF7903]'>Invention</span></h1>
            <div className='md:block hidden'>
                <ul className='flex gap-7'>
                    <li className='cursor-pointer'><a className='underline' href="">HOME</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">WORKS</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">TECHNOLOGIES</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">SERVICES</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">COMPANY</a></li>
                    <li className='cursor-pointer'><a className='underline' href="">CONTACTS</a></li>
                </ul>
            </div>
            <label onClick={() => setMenuIcon(!menuIcons)} htmlFor="my-drawer-4" className="btn btn-circle md:hidden">
                <svg className={`${menuIcons ? "" : "hidden"} fill-current`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                <svg className={`${menuIcons ? "hidden" : ""} fill-current`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
        </div>

    );
};

export default Header;