"use client"
import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard';
interface Client {
    id: number;
    image: string;
    title: string;
    description: string;
}

const RecentClients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch("clients.json")
            .then(res => res.json())
            .then(data => setClients(data))
    }, []);

    return (
        <div className='md:py-20 py-10 text-center text-white'>
            <h1 className='md:text-6xl text-5xl py-6'>Recent clients</h1>
            <p className='text-xl text-[#CFCFD0] md:px-0 px-4'>
                We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East <br />
                World's 4th Strongest Banking Brand, Automobile & IoT industry
            </p>
            <div className='grid md:grid-cols-3 grid-cols-1 text-center gap-8 md:mx-10 md:py-32 py-14' data-aos="fade-up" data-aos-duration="1000">
                {clients.map((client: Client) => <ClientCard key={client.id} client={client} />)}
            </div>
        </div>
    );
};

export default RecentClients;