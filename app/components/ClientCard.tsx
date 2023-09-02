import React from 'react';

interface ClientCardProps {
    client: {
        image: string;
        title: string;
        description: string;
    };
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
    return (
        <div className='bg-[#2E3038] p-12 flex flex-col gap-4 md:w-[370px] md:h-[500px] w-[360px] h-[490px] justify-center items-center mx-auto'>
            <img className='w-[200px] mx-auto pb-7' src={client.image} alt="" />
            <h1 className='text-2xl font-semibold'>{client.title}</h1>
            <p className='text-[#CDCDCF] '>{client.description}</p>
        </div>
    );
};

export default ClientCard;
