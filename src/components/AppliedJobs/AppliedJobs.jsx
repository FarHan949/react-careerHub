import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../utility/localStorage';
import bg1 from '../../../public/bg-img/bg1.png'
import bg2 from '../../../public/bg-img/bg2.png'
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    
    const jobs = useLoaderData()
   
    const {remote_or_onsite} = jobs
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] =  useState([])

    const handelJobFilter = (filter) =>{
          if(filter === 'all'){
            setDisplayJobs(appliedJobs)
          }
          else if(filter === 'remote'){
           const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
           setDisplayJobs(remoteJobs)
          }
          else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
          }
    }

    useEffect(()=>{
        const storedJobIds = getStoreJobApplication()
        if(jobs.length > 0){
            //  const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id)) \\ short cut way to filter storage id            
            const jobApplied = []
            for(const id  of  storedJobIds){
                const job = jobs.find(job =>  job.id === id)
                if(job) jobApplied.push(job)
            }
        // console.log(storedJobIds, jobApplied)
        setAppliedJobs(jobApplied)
        setDisplayJobs(jobApplied)
    }
    },[jobs]) 
  
    return (
        <div>
            <div className='w-full bg-slate-100 flex justify-between rounded-xl items-center'>
              <img src={bg1} className='w-1/4' alt="" />
              <h2 className='text-2xl font-bold'>Applied Jobs</h2>
              <img src={bg2} className='w-1/4' alt="" />
              </div>

              <div className='text-right'>
              <details className="dropdown">
                 <summary className="btn m-1 bg-slate-200">Filter</summary>
                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handelJobFilter('all')}><a>All</a></li>
                    <li onClick={()=> handelJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handelJobFilter('onsite')}><a>Onsite</a></li>
                 </ul>
             </details>

              </div>

                {
                    displayJobs.map(appliedJob => <AppliedJob
                    key={appliedJob.id}
                    appliedJob={appliedJob}></AppliedJob>)
                }
        </div>
    );
};

export default AppliedJobs;