import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../utility/localStorage';
import bg1 from '../../../public/bg-img/bg1.png'
import bg2 from '../../../public/bg-img/bg2.png'
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])

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
    }
    },[])
  
    return (
        <div>
            <div className='w-full bg-slate-100 flex justify-between rounded-xl items-center'>
              <img src={bg1} className='w-1/4' alt="" />
              <h2 className='text-2xl font-bold'>Applied Jobs</h2>
              <img src={bg2} className='w-1/4' alt="" />
              </div>
              <div></div>

                {
                    appliedJobs.map(appliedJob => <AppliedJob
                    key={appliedJob.id}
                    appliedJob={appliedJob}></AppliedJob>)
                }
        </div>
    );
};

export default AppliedJobs;