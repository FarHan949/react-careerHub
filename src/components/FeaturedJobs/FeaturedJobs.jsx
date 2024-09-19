import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

   const [jobs, setJobs] = useState([])

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
                    jobs.map(job => <Job key={job.id} job={job}></Job> )
                  }
                  </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;