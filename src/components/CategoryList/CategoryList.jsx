import React from 'react';
import account from '../../../public/icons/accounts.png'
import chip from '../../../public/icons/chip.png'
import creative from '../../../public/icons/creative.png'
import marketing  from '../../../public/icons/marketing.png'


const CategoryList = () => {
    return (
        <div className='mt-7'>
            <h2 className='text-5xl text-center font-bold'>Job Categories List</h2>
            <p className='text-center mt-5 text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             
             <div className='flex justify-center flex-wrap gap-10 mt-10'>

                  <div className='border bg-cyan-50 rounded-xl p-5'>
                    <img className='bg-cyan-200 p-2 rounded' src={account} alt="" />
                    <h3 className='text-sm font-bold mt-2'>Accounting & Finance</h3>
                    <p className='text-sm text-slate-600 mt-1'>300 Jobs Available</p>
                  </div>
                  <div className='border bg-cyan-50 rounded-xl p-5'>
                    <img className='bg-cyan-200 p-2 rounded' src={creative} alt="" />
                    <h3 className='text-sm font-bold mt-2'>Creative Design</h3>
                    <p className='text-sm text-slate-600 mt-1'>100+ Jobs Available</p>
                  </div>
                  <div className='border bg-cyan-50 rounded-xl p-5'>
                    <img className='bg-cyan-200 p-2 rounded' src={marketing} alt="" />
                    <h3 className='text-sm font-bold mt-2'>Marketing & Sales</h3>
                    <p className='text-sm text-slate-600 mt-1'>150 Jobs Available</p>
                  </div>
                  <div className='border bg-cyan-50 rounded-xl p-5'>
                    <img className='bg-cyan-200 p-2 rounded' src={chip} alt="" />
                    <h3 className='text-sm font-bold mt-2'>Engineering Job</h3>
                    <p className='text-sm text-slate-600 mt-1'>224 Jobs Available</p>
                  </div>
                  
             </div>
        </div>
    );
};

export default CategoryList;