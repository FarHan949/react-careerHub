import { MdOutlineAttachMoney, MdOutlineEmail } from "react-icons/md"
import { RiHandbagFill } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { CiLocationOn } from "react-icons/ci"
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg1 from '../../../public/bg-img/bg1.png'
import bg2 from '../../../public/bg-img/bg2.png'
import { saveJobApplication } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    
    const jobs = useLoaderData()
    const {id} = useParams()

    const job = jobs.find( job =>  job.id === parseInt(id))
    
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, 
         contact_information} = job

        const handelApplyJob  = () => {
            saveJobApplication(parseInt(id))
            toast.success('Job Applied Successfully',)  
           } 

     

    return (
        <div>
            <Helmet>
                <title>Career Hub | {job_title}</title>
            </Helmet>
              <div className='w-full bg-slate-100 flex justify-between rounded-xl items-center'>
              <img src={bg1} className='w-1/4' alt="" />
              <h2 className='text-2xl font-bold'>Job Details</h2>
              <img src={bg2} className='w-1/4' alt="" />
              </div>

              <div className='grid gap-4 md:grid-cols-4 mt-10 m-5'>

                <div className='md:col-span-3'>
                    <p className='m-1 p-5'>
                    <span className='font-bold'>Job description</span> : <span className='text-slate-600'>{job_description}</span>
                    </p>
                    <p className='m-1 p-5'>
                    <span className='font-bold'>Job responsibility</span> : <span className='text-slate-600'>{job_responsibility}</span>
                    </p>
                    <div className='m-1 p-5'>
                    <p className='font-bold'>Educational Requirements:</p>
                    <p className='text-slate-600 mt-5'>{educational_requirements}</p>
                    </div>
                    <div className='m-1 p-5'>
                    <p className='font-bold'>Experiences:</p>
                    <p className='text-slate-600 mt-5'>{experiences}</p>
                    </div>
                </div>

                <div>
                      <div className='border bg-cyan-100 rounded-xl'>
                           <div className='ml-4'>
                            <p className='font-bold m-4'>Job Details</p>
                            <div className='border-t-2 border-cyan-300 mr-4 p-1 text-sm'>
                                <div className='mt-2 flex gap-1'>
                                <MdOutlineAttachMoney size={20} className="text-cyan-400"></MdOutlineAttachMoney>   
                                <p>  
                                    <span className='font-bold'>Salary</span> : {salary} (Per Month)
                                </p>
                                </div>
                                <div className='mt-2 flex gap-1'>
                                <RiHandbagFill size={20} className="text-cyan-400"></RiHandbagFill>   
                                <p>  
                                    <span className='font-bold'>Job Title</span> : {job_title}
                                </p>
                                </div>     
                     </div>

                           </div>
                           <div className='ml-4'>
                            <p className='font-bold m-4'>Contact Information</p>
                            <div className='border-t-2 border-cyan-300 mr-4 p-1 pb-4 text-sm'>
                            <div className='mt-2 flex gap-1'>
                                <FiPhone size={20} className="text-cyan-400"></FiPhone>   
                                <p>  
                                    <span className='font-bold'>Phone</span> : {contact_information.phone}
                                </p>
                             </div>     
                            <div className='mt-2 flex gap-1'>
                                <MdOutlineEmail size={20} className="text-cyan-400"></MdOutlineEmail>   
                                <p>  
                                    <span className='font-bold'>Email</span> : {contact_information.email}
                                </p>
                             </div>     
                            <div className='mt-2 flex gap-1'>
                                <CiLocationOn size={20} className="text-cyan-400"></CiLocationOn>   
                                <p>  
                                    <span className='font-bold'>Address</span> : {contact_information.address}
                                </p>
                             </div>     
                                
                            </div>
                           </div>
                           
                      </div>
                      <div onClick={handelApplyJob} className="btn bg-cyan-400 w-full mt-5">Apply Now</div>                    
                </div>
              </div>
              <ToastContainer />
        </div>
    );
};

export default JobDetails;