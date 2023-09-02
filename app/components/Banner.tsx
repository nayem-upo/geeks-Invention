"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        gsap.from(element, {
            opacity: 0,
            x: -100,
            duration: 1,
        });
    }, []);
    return (
        <div className='text-white text-center flex flex-col gap-10 min-h-screen z-0 place-content-center'>
            <h1 ref={elementRef} className='md:text-6xl text-5xl uppercase'>Embrace the future</h1>
            <h4 className='md:text-4xl text-2xl'>Welcome to the Age of Action</h4>
        </div>
    );
};

export default Banner;