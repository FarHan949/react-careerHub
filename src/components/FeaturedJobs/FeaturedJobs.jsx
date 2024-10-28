import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

   const [jobs, setJobs] = useState([])

//    this not the best way to load show all data

   const [dataLength, setDataLength] = useState(4)    

 useEffect(()=>{
    fetch('jobs.json')
    .then( res => res.json())
    .then(data => setJobs(data))
   },[])

    return (
        <div>
            <div className='text-center'>
                  <h2 className='text-5xl'>Featured Job {jobs.length}</h2>
                  <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                  <div className='md:grid grid-cols-2 gap-6 mb-6 mt-6 max-w-4xl mx-auto'>
                  {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job> )
                  }
                  </div>
                  
            <div className={dataLength == jobs.length  ? 'hidden' : ''}>
                {/* dataLength == jobs.length && 'hidden' */}

                <button
                onClick={() => setDataLength(jobs.length)}
                className="btn bg-cyan-300 m-5">Show All Jobs</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;