import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md"
import { Link } from "react-router-dom";


const AppliedJob = ({appliedJob}) => {
  const {
      id,
      logo, 
      salary, 
      location, 
      job_type,
      job_title,
      company_name, 
      remote_or_onsite, 
      } = appliedJob

    return (
        <div className='flex justify-between m-5 border items-center p-5'>
                  <div className='flex justify-center gap-5'>
                    <img className='w-44' src={logo} alt="" />
                      <div className='m-1'>
                         <h1 className='font-bold'>{job_title}</h1>
                         <h3 className='text-slate-500'>{company_name}</h3>
                       <div className='flex mt-2'>
                         <p className="px-3 py-2 mr-2 font-bold border rounded border-[#22d3ee] text-[#22d3ee]">{remote_or_onsite}</p>
                         <p className="px-3 py-2 mr-2 font-bold border rounded border-[#22d3ee] text-[#22d3ee]">{job_type}</p>
                       </div>
                       <div className='flex mt-2 text-sm gap-2'>
                          <div className='flex gap-1'>
                            <CiLocationOn size={20} className="text-cyan-400" />
                            <p className="text-slate-500">{location}</p>
                          </div>
                          <div className='flex gap-1'>
                            <MdOutlineAttachMoney size={20} className="text-cyan-400" />
                            <p className="text-stone-500">Salary : {salary}</p>
                          </div>
                          
                       </div>
                      </div>
                  </div>
                  
                  <Link to={`/job/${id}`}>
            <button className="btn bg-[#22d3ee] hover:bg-cyan-300">View Details</button>
                  </Link>
            
        </div>
    );
};

export default AppliedJob;
 