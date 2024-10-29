import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md"
import { Link } from "react-router-dom";

const Job = ({job}) => {

  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes"  className="w-44"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-left">{company_name}</p>
          <div className="text-left">
            <button className="px-5 py-2 mr-4 font-extrabold border rounded border-[#22d3ee] text-[#22d3ee]">{remote_or_onsite}</button>
            <button className="px-5 py-2 mr-4 font-extrabold border rounded border-[#22d3ee] text-[#22d3ee]">{job_type}</button>
          </div>
          <div className="flex gap-3 mt-2">
            <div className="flex">
              <CiLocationOn size={20} className="text-cyan-400" />
              <p>{location}</p>
            </div>
            <div className="flex">        
              <MdOutlineAttachMoney size={20} className="text-cyan-400"></MdOutlineAttachMoney>     
              <p>{salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn bg-[#22d3ee] hover:bg-cyan-300">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;