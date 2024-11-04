import { json } from "react-router-dom";

const getStoreJobApplication = () =>{
    const stored = localStorage.getItem('job-applications');
    if(stored){
        return JSON.parse(stored);
    }
    return []
}




const saveJobApplication = id =>{
  const  storedJobApplications = getStoreJobApplication();
  const exits = storedJobApplications.find( jobId => jobId === id );
  
  if(!exits){
    storedJobApplications.push(id)
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
  }

}


export  {getStoreJobApplication, saveJobApplication};
