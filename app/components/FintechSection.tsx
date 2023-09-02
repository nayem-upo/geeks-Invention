import Link from 'next/link';


const FintechSection = () => {
    return (
        <div className='text-white flex-col-reverse flex md:flex-row pt-10 justify-center gap-10 items-center min-h-[700px]'>
            <div className='md:w-[450px]' data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-6xl font-semibold md:mx-0 mx-4'>Fintech Solution</h1>
                <p className='text-[#B2ABDD] md:text-3xl text-2xl py-4 md:mx-0 mx-4'>Transforming Fintech with AI</p>
                <ul className='flex flex-wrap items-center md:gap-4 gap-2 text-sm text-center font-thin py-1 md:mx-0 mx-4'>
                    <li className='bg-[#5443B3] py-1 px-3 rounded-full'>Fraud detection</li>
                    <li className='bg-[#5443B3] py-1 px-3 rounded-full'>Transaction categorisation</li>
                    <li className='bg-[#5443B3] py-1 px-3 rounded-full'>Risk Scoring</li>
                </ul>
                <p className='text-lg py-6 w-[400px] md:px-0 px-4'>
                    Empower your financial institution with our advanced fintech solutions. From
                    real-time fraud detection to easy bookkeeping, our software development services
                    provide credit risk scoring for accurate lending eligibility, transaction
                    categorization for seamless organization, and anomaly detection to safeguard
                    your assets
                </p>
                <Link href="" className="w-[240px] mx-auto md:mx-0 border border-1 px-6 py-[16px] study-button hover:text-[#5443B3] text-white hover:bg-white text-xl rounded-full duration-300">
                    See case full study
                </Link>
            </div>
            <img className='w-[600px] md:p-0 p-4' src="https://geeksinvention.com/assets/v3/industry-fintech.svg" alt="" />
        </div>
    );
};

export default FintechSection;