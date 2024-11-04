import React from 'react';
import user from '../../../public/bg-img/user.png'

const Banner = () => {
    return (
        <div className='flex justify-between m-5 items-center w-full'>

            <div className='w-full text-left'>

            <h1 className='text-5xl font-bold'>One Step</h1>
            <h1 className='text-5xl font-bold'>Close To Your</h1>
            <h1 className='text-5xl font-bold text-cyan-400'>Dream Job</h1>

            <p className='text-slate-600 text-sm mt-5'>
            Explore thousands of job opportunities with all the information <br /> you need.
             Its your future. Come find it. Manage all your job <br /> application from start to finish.
            </p>
            <div className='mt-5'>
                <button className='bg-cyan-400 text-white py-2 px-5 rounded-md'>Get Start</button> 
            </div>
            </div>

            <div className='ml-20 p-10'>
                <img className='w-full' src={user} alt="" />
            </div>

        </div>
    );
};

export default Banner;